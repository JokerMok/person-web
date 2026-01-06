import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { ZoomIn, ChevronLeft, ChevronRight, X, RotateCcw } from 'lucide-react'

const ImageCarousel = ({ images, altPrefix = '', size = null, noBackground = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const [modalZoom, setModalZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const modalImageRef = useRef(null)
  
  // 用于确保 Portal 只在客户端渲染，防止 SSR 错误
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  // 缩略图自动轮播
  useEffect(() => {
    if (isModalOpen) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length, isModalOpen])

  // 弹窗打开时禁止背景滚动和添加ESC键监听
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  // 切换弹窗图片时重置状态
  useEffect(() => {
    setModalZoom(1)
    setImagePosition({ x: 0, y: 0 })
  }, [modalIndex])

  // --- 拖拽逻辑 ---
  const handleDragStart = (clientX, clientY) => {
    setIsDragging(true)
    setDragStart({
      x: clientX - imagePosition.x,
      y: clientY - imagePosition.y
    })
  }

  const handleDragMove = (clientX, clientY) => {
    if (!isDragging) return
    setImagePosition({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    })
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // 鼠标事件
  const handleMouseDown = (e) => {
    e.preventDefault()
    handleDragStart(e.clientX, e.clientY)
  }

  const handleMouseMove = (e) => {
    if (isDragging) e.preventDefault()
    handleDragMove(e.clientX, e.clientY)
  }

  // 触摸事件
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0]
      handleDragStart(touch.clientX, touch.clientY)
    }
  }

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      if (e.cancelable) e.preventDefault()
      const touch = e.touches[0]
      handleDragMove(touch.clientX, touch.clientY)
    }
  }

  // --- 导航逻辑 ---
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  const openModal = (index) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const modalNext = (e) => {
    e?.stopPropagation()
    setModalIndex((prev) => (prev + 1) % images.length)
  }

  const modalPrev = (e) => {
    e?.stopPropagation()
    setModalIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // 滚轮缩放
  const handleWheel = (e) => {
    e.preventDefault()
    setModalZoom((prev) => {
      const newZoom = prev + (e.deltaY > 0 ? -0.1 : 0.1)
      return Math.max(0.5, Math.min(5, newZoom))
    })
  }

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
        <span className="text-gray-500 text-xs">No images available</span>
      </div>
    )
  }

  // 定义 Modal 内容组件
  const ModalContent = () => (
    <div
      className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center"
      onClick={closeModal}
      // 强制内联样式确保覆盖所有外部 CSS
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        margin: 0,
        padding: 0,
      }}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-[100000] bg-gray-800/50 hover:bg-gray-700 p-2 rounded-full text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Controls Container */}
      <div className="absolute top-4 left-4 z-[100000] flex gap-2">
        <div className="bg-gray-800/50 px-3 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm">
          {Math.round(modalZoom * 100)}%
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setModalZoom(1)
            setImagePosition({ x: 0, y: 0 })
          }}
          className="bg-gray-800/50 hover:bg-gray-700 p-2 rounded-full text-white backdrop-blur-sm transition-colors"
          title="Reset View"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Image Area */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          ref={modalImageRef}
          src={images[modalIndex]}
          alt={`${altPrefix} large`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          onWheel={handleWheel}
          draggable={false}
          className="max-w-none max-h-none select-none"
          style={{
            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${modalZoom})`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Modal Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={modalPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 text-white transition-colors z-[100000]"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={modalNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 text-white transition-colors z-[100000]"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-[100000]">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setModalIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                index === modalIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Thumbnail Carousel */}
      <div
        className={`relative overflow-hidden group hover-lift ${noBackground ? '' : 'bg-gray-800 rounded-lg border border-gray-700'}`}
        style={{
          transition: 'all 0.3s ease',
          ...(size ? { width: size, height: size === '100%' ? '300px' : size } : { aspectRatio: '16/9' }),
        }}
      >
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="w-full h-full object-contain opacity-100 cursor-pointer"
          onClick={() => openModal(currentIndex)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => openModal(currentIndex)}
              className="absolute top-3 right-3 bg-gray-900/80 hover:bg-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 btn-hover z-10"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 btn-hover z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 btn-hover z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-500 w-6'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 使用 Portal 将 Modal 渲染到 body 节点下，跳出所有父级限制 */}
      {isModalOpen && mounted && ReactDOM.createPortal(<ModalContent />, document.body)}
    </>
  )
}

export default ImageCarousel
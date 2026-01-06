import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Code, Briefcase, Brain, Zap, FileText, BarChart3, Globe, Database } from 'lucide-react'
import ImageCarousel from './components/ImageCarousel'

// 导入所有需要的图片
const miniProgramPrototype = new URL('./images/mini-program-prototype.jpg', import.meta.url).href
const invoiceRecognitionAgent = new URL('./images/invoice-recognition-agent.jpg', import.meta.url).href
const aiLeadScoringFlowchart = new URL('./images/ai-lead-scoring-flowchart.jpg', import.meta.url).href
const aiLeadScoringFlowchart2 = new URL('./images/ai-lead-scoring-flowchart-2.jpg', import.meta.url).href
const aiLeadScoringFlowchart3 = new URL('./images/ai-lead-scoring-flowchart-3.jpg', import.meta.url).href
const smartWaterAiAgentWorkflow = new URL('./images/smart-water-ai-agent-dify-workflow.jpg', import.meta.url).href
const smartWaterAiAgentWorkflow2 = new URL('./images/smart-water-ai-agent-dify-workflow-2.jpg', import.meta.url).href
const moldCloudPlatformUi = new URL('./images/mold-cloud-platform-ui-design.jpg', import.meta.url).href
const moldCloudPlatformUi2 = new URL('./images/mold-cloud-platform-ui-design-2.jpg', import.meta.url).href
const wechatQrCode = new URL('./images/wechat-qr-code.jpg', import.meta.url).href

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">
              JokerMok个人网站
            </div>
          <div className="hidden md:flex space-x-10">
            <a href="#hero" className="text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium tracking-wide">首页</a>
            <a href="#value" className="text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium tracking-wide">价值</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium tracking-wide">案例</a>
            <a href="#footer" className="text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium tracking-wide">联系</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Animated Background */}
        <div className="professional-bg"></div>
        {/* Custom Background Image (Uncomment to use) */}
        {/* <div className="custom-bg" style={{ backgroundImage: 'url(/src/images/hero-background.jpg)' }}></div> */}
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">
                重构B2B复杂业务
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="gradient-text">
                定义AI落地新范式
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              我是莫臻轩 | 11年软件产品专家 | AI应用探索者
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              致力于将深厚产业积淀与前沿AI技术结合，构建下一代企业增长引擎
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                href="#projects" 
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-900/40"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                查看我的AI实战案例
                <ArrowDown className="w-5 h-5" />
              </motion.a>
              {/* <motion.a 
                href="#" 
                className="px-12 py-5 border border-slate-700 text-white font-semibold rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-900/20"
                whileHover={{ scale: 1.03 }}
                // whileTap={{ scale: 0.97 }}
              > */}
                {/* 下载完整简历
                <Download className="w-5 h-5" /> */}
              {/* </motion.a> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value" className="py-24 bg-dark-card grid-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text">
                双引擎驱动的产品能力
              </span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side: Solid B2B Foundation */}
              <motion.div 
                className="glass-card rounded-xl p-8 border border-gray-700 hover-lift flex flex-col justify-between"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-500">深厚的B2B底座</h3>
                  </div>
                  <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                    11 年深耕企业数字化核心腹地。由于具备跨越 5+ 垂直行业的实战经验，我擅长将复杂的线下业务解耦为清晰的数字模型。从亿级流水的交易平台到精密制造的 MES 系统，我提供的不仅仅是功能堆叠，而是经得起业务扩张考验的顶层架构。
                  </p>
                </div>
                
                <div className="space-y-5">
                  {[
                    { label: 'PMP & 高级信管师双重认证', icon: <FileText className="w-4 h-4 text-blue-500" /> },
                    { label: '复杂系统顶层架构设计', icon: <Globe className="w-4 h-4 text-blue-500" /> },
                    { label: '全生命周期产品管理', icon: <Database className="w-4 h-4 text-blue-500" /> },
                    { label: '亿级流水业务支撑能力', icon: <BarChart3 className="w-4 h-4 text-blue-500" /> }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-1000/50 rounded-lg border border-slate-750">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <span className="text-gray-300 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right Side: Agile AI Engine */}
              <motion.div 
                className="glass-card rounded-xl p-8 border border-gray-700 hover-lift"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-500">敏捷AI引擎</h3>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  拒绝纸上谈兵的 PPT 规划。我推崇‘以手思考’，利用 LLM、低代码与 Vibe Coding 技术，将从 0 到 1 的验证周期从‘月’缩短为‘天’。在资源受限的环境下，依然能快速交付高可用、可交互的智能体原型，让商业想法即刻落地。
                </p>
                
                {/* Live Prototype & Agent Demos */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-4 text-gray-200">快速原型与智能体实战演示</h4>
                  <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700">
                    <ImageCarousel 
                      images={[
                        miniProgramPrototype,
                        invoiceRecognitionAgent
                      ]} 
                      altPrefix="快速原型与智能体实战演示"
                      size="100%"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="projects" className="py-24 bg-dark-card grid-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text">
                B端AI实战案例
              </span>
            </motion.h2>
          </div>
          
          <div className="space-y-16">
            {/* Case 1: AI B2B Lead Acquisition */}
            <motion.div 
              className="glass-card rounded-xl p-8 md:p-10 border border-gray-700 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-stretch">
                <div className="md:w-1/2 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #RevenueGrowth
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #SalesTech
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #AI-Flow
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">AI驱动的线索获客系统</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      基于LLM的自动化线索清洗与评分系统。通过多源数据融合与意图识别，大幅提升销售转化效率。
                    </p>
                  </div>
                  
                  {/* Lead Scoring Visualization */}
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-750">
                    <h4 className="text-lg font-semibold mb-5 text-gray-200">线索评分效果</h4>
                    <div className="space-y-5">
                      {[
                        { label: '线索质量提升', value: 85 },
                        { label: '转化效率提升', value: 72 },
                        { label: '人工成本降低', value: 68 }
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400 font-medium">{item.label}</span>
                            <span className="text-blue-500 font-bold">{item.value}%</span>
                          </div>
                          <div className="w-full bg-slate-750 rounded-full h-2.5">
                            <motion.div 
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col h-full">
                  <ImageCarousel 
                    images={[
                      aiLeadScoringFlowchart,
                      aiLeadScoringFlowchart2,
                      aiLeadScoringFlowchart3
                    ]} 
                    altPrefix="AI线索评分流程图"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Case 2: Smart Water AI Agent */}
            <motion.div 
              className="glass-card rounded-xl p-8 md:p-10 border border-gray-700 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row-reverse gap-10 items-stretch">
                <div className="md:w-1/2 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #LLM-Orchestration
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #Dify
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #PromptEngineering
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">智慧水务AI助手</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      基于Dify构建的复杂业务智能体。实现自然语言查数、自动生成报表与设备故障预警，重塑传统水务交互体验。
                    </p>
                  </div>
                  
                  {/* Key Features */}
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-750">
                    <h4 className="text-lg font-semibold mb-5 text-gray-200">核心功能</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        '自然语言查询',
                        '自动报表生成',
                        '设备故障预警',
                        '实时数据监控'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-slate-750/50 rounded-lg">
                          <Zap className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-300 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <ImageCarousel 
                    images={[
                      smartWaterAiAgentWorkflow,
                      smartWaterAiAgentWorkflow2
                    ]} 
                    altPrefix="智慧水务AI助手Dify工作流"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Case 3: Mold Cloud Platform */}
            <motion.div 
              className="glass-card rounded-xl p-8 md:p-10 border border-gray-700 hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-10 items-stretch">
                <div className="md:w-1/2 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #Complex-B2B
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #SaaS-Architecture
                      </div>
                      <div className="px-4 py-1.5 bg-blue-600/10 text-blue-500 rounded-full text-xs font-semibold">
                        #National-Level
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">模具云供应链协同平台</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      国家级工业互联网项目。主导从0到1的供应链协同体系设计，支撑复杂的多角色交易与履约流程。
                    </p>
                  </div>
                  
                  {/* Business Impact */}
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-750">
                    <h4 className="text-lg font-semibold mb-6 text-gray-200">业务影响</h4>
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: '覆盖企业数', value: '5000+' },
                        { label: '年交易额', value: '10亿+' },
                        { label: '协同效率提升', value: '45%' }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                          <div className="w-32 h-24 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-lg flex items-center justify-center border border-slate-750 mb-3">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                              {item.value}
                            </span>
                          </div>
                          <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <ImageCarousel 
                    images={[
                      moldCloudPlatformUi,
                      moldCloudPlatformUi2
                    ]} 
                    altPrefix="模具云供应链协同平台UI设计"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer & Professional Philosophy */}
      <footer id="footer" className="py-24 bg-dark-bg border-t border-gray-800 grid-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Professional Philosophy */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="gradient-text">
                  专业理念
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                在AI时代，稳健不是保守，而是为了让创新走得更远。我不仅提供远见，更提供可落地的路径。
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <h3 className="text-xl font-bold mb-6 text-white">联系我</h3>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-750">
                      <svg xmlns="http://www.w3.org/3000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">邮箱</div>
                      <div className="text-gray-300 font-medium">mozhenxuan@163.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-750">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div> */}
                    {/* <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">电话</div>
                      <div className="text-gray-300 font-medium">+86 138-XXXX-XXXX</div>
                    </div> */}
                  </div>
                </div>
              </div>
              
              {/* WeChat QR Code */}
              <div className="mt-10">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">微信扫码</div>
                <ImageCarousel 
                  images={[wechatQrCode]} 
                  altPrefix="微信二维码"
                  size="200px"
                  noBackground={true}
                />
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-20 pt-10 border-t border-slate-800 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-gray-500 text-sm">© 2024 莫臻轩. 保留所有权利.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">隐私政策</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">使用条款</a>
                <a href="#" className="text-gray-500 hover:text-blue-500 text-sm transition-colors">Cookie政策</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
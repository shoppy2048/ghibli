import React, { useState, useEffect } from 'react';
import { Upload, Globe2, ChevronDown, Menu, X, Wand2, Image, Sparkles, Clock, Star, Check } from 'lucide-react';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const examples = [
    {
      before: "/src/assets/imgs/photo-1449824913935-59a10b8d2000.jpg?w=800",
      after: "./src/assets/imgs/photo-1493976040374-85c8e12f0c0e.jpg?w=800",
      title: isEnglish ? "City Transformation" : "城市转换",
      description: isEnglish 
        ? "Urban landscape transformed into a magical Ghibli world" 
        : "都市景观转变为吉卜力魔法世界"
    },
    {
      before: "/src/assets/imgs/photo-1502786129293-79981df4e689.jpg?w=800",
      after: "/src/assets/imgs/photo-1513542789411-b6a5d4f31634.jpg?w=800",
      title: isEnglish ? "Nature Magic" : "自然魔法",
      description: isEnglish 
        ? "Natural scenery with enchanted Ghibli elements" 
        : "融入吉卜力元素的自然风光"
    },
    {
      before: "/src/assets/imgs/photo-1490750967868-88aa4486c946.jpg?w=800",
      after: "/src/assets/imgs/photo-1528164344705-47542687000d.jpg?w=800",
      title: isEnglish ? "Magical Garden" : "魔法花园",
      description: isEnglish 
        ? "Garden scene with Ghibli's distinctive style" 
        : "具有吉卜力特色的花园场景"
    }
  ];

  const content = {
    nav: {
      features: isEnglish ? 'Features' : '功能',
      howItWorks: isEnglish ? 'How It Works' : '使用方法',
      pricing: isEnglish ? 'Pricing' : '价格',
      faq: isEnglish ? 'FAQ' : '常见问题',
    },
    hero: {
      title: isEnglish 
        ? 'Transform Your Photos into Ghibli Magic' 
        : '将您的照片转换为吉卜力魔法',
      subtitle: isEnglish
        ? 'Experience the enchanting world of Studio Ghibli through AI-powered image transformation'
        : '通过AI技术体验吉卜力工作室的魔法世界',
      cta: isEnglish ? 'Start Creating' : '开始创作',
    },
    upload: {
      title: isEnglish ? 'Create Your Magic' : '创造您的魔法',
      description: isEnglish 
        ? 'Upload an image or describe your vision' 
        : '上传图片或描述您的想法',
      button: isEnglish ? 'Generate Image' : '生成图片',
      placeholder: isEnglish 
        ? 'Describe your dream Ghibli scene...' 
        : '描述您梦想中的吉卜力场景...',
    },
    examples: {
      title: isEnglish ? 'Example Transformations' : '转换示例',
      subtitle: isEnglish 
        ? 'See how our AI transforms ordinary photos into Ghibli masterpieces' 
        : '看看我们的AI如何将普通照片转换成吉卜力杰作',
      before: isEnglish ? 'Before' : '转换前',
      after: isEnglish ? 'After' : '转换后',
    },
    features: [
      {
        icon: <Wand2 className="w-8 h-8" />,
        title: isEnglish ? 'Advanced AI Technology' : '先进的AI技术',
        description: isEnglish 
          ? 'Powered by state-of-the-art machine learning models'
          : '由最先进的机器学习模型驱动',
      },
      {
        icon: <Image className="w-8 h-8" />,
        title: isEnglish ? 'High Quality Output' : '高质量输出',
        description: isEnglish
          ? 'Generate stunning high-resolution Ghibli-style images'
          : '生成令人惊叹的高分辨率吉卜力风格图片',
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: isEnglish ? 'Style Authenticity' : '风格真实性',
        description: isEnglish
          ? 'True to the magical Ghibli art style'
          : '忠实还原吉卜力艺术风格',
      },
    ],
    howItWorks: [
      {
        step: '1',
        title: isEnglish ? 'Upload or Describe' : '上传或描述',
        description: isEnglish
          ? 'Share your image or describe your vision in detail'
          : '分享您的图片或详细描述您的想法',
      },
      {
        step: '2',
        title: isEnglish ? 'AI Processing' : 'AI处理',
        description: isEnglish
          ? 'Our AI analyzes and transforms your input'
          : '我们的AI分析并转换您的输入',
      },
      {
        step: '3',
        title: isEnglish ? 'Magic Results' : '魔法结果',
        description: isEnglish
          ? 'Receive your Ghibli-style masterpiece'
          : '获取您的吉卜力风格杰作',
      },
    ],
    testimonials: [
      {
        image: "/src/assets/imgs/photo-1494790108377-be9c29b29330.jpg?w=400",
        name: isEnglish ? 'Sarah Chen' : '陈萱',
        role: isEnglish ? 'Digital Artist' : '数字艺术家',
        quote: isEnglish
          ? "The quality of the generated images is absolutely stunning. It's like having Studio Ghibli's artists at your fingertips."
          : "生成的图片质量令人惊叹。就像在指尖拥有吉卜力工作室的艺术家一样。",
      },
      {
        image: "/src/assets/imgs/photo-1472099645785-5658abf4ff4e.jpg?w=400",
        name: isEnglish ? 'David Wong' : '王大卫',
        role: isEnglish ? 'Animator' : '动画师',
        quote: isEnglish
          ? "This tool has revolutionized my creative process. The attention to detail in each generation is remarkable."
          : "这个工具彻底改变了我的创作过程。每次生成的细节都令人印象深刻。",
      },
    ],
    pricing: [
      {
        name: isEnglish ? 'Basic' : '基础版',
        price: isEnglish ? '$9.99' : '￥69',
        period: isEnglish ? '/month' : '/月',
        features: isEnglish 
          ? ['20 generations/month', 'Standard resolution', 'Basic support']
          : ['每月20次生成', '标准分辨率', '基础支持'],
      },
      {
        name: isEnglish ? 'Pro' : '专业版',
        price: isEnglish ? '$24.99' : '￥169',
        period: isEnglish ? '/month' : '/月',
        features: isEnglish
          ? ['Unlimited generations', 'HD resolution', 'Priority support', 'Advanced customization']
          : ['无限次生成', '高清分辨率', '优先支持', '高级自定义'],
      },
    ],
    faq: [
      {
        question: isEnglish 
          ? 'How long does it take to generate an image?'
          : '生成一张图片需要多长时间？',
        answer: isEnglish
          ? 'Most images are generated within 30 seconds, depending on complexity and server load.'
          : '大多数图片在30秒内生成完成，具体取决于复杂度和服务器负载。',
      },
      {
        question: isEnglish
          ? 'Can I use the generated images commercially?'
          : '我可以将生成的图片用于商业用途吗？',
        answer: isEnglish
          ? 'Yes, all generated images come with a commercial license for your use.'
          : '是的，所有生成的图片都附带商业使用许可。',
      },
      {
        question: isEnglish
          ? 'What image formats are supported?'
          : '支持哪些图片格式？',
        answer: isEnglish
          ? 'We support JPG, PNG, and WEBP formats for both input and output.'
          : '我们支持JPG、PNG和WEBP格式的输入和输出。',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full bg-white/80 backdrop-blur-md z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#1a73e8] to-[#8ab4f8] bg-clip-text text-transparent">
                GhibliAI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900">
                {content.nav.features}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900">
                {content.nav.howItWorks}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900">
                {content.nav.pricing}
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900">
                {content.nav.faq}
              </button>
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Globe2 className="w-5 h-5 mr-1" />
                {isEnglish ? 'EN' : '中文'}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {content.nav.features}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {content.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {content.nav.pricing}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {content.nav.faq}
            </button>
            <button
              onClick={() => setIsEnglish(!isEnglish)}
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              <Globe2 className="w-5 h-5 mr-1" />
              {isEnglish ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
          <button onClick={() => scrollToSection('upload')} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            {content.hero.cta}
          </button>
        </div>
      </section>

      {/* Example Transformations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">{content.examples.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {content.examples.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3">
                    <img src={example.before} alt="Before" className="object-cover w-full h-48" />
                  </div>
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    {content.examples.before}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3">
                    <img src={example.after} alt="After" className="object-cover w-full h-48" />
                  </div>
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    {content.examples.after}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Generation Section */}
      <section id="upload" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">{content.upload.title}</h2>
            <p className="text-gray-600 text-center mb-8">{content.upload.description}</p>
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-8 hover:border-blue-500 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                {isEnglish ? 'Drag and drop your image here, or' : '拖放图片到这里，或'}
                <button className="text-blue-600 hover:text-blue-700 font-medium mx-1">
                  {isEnglish ? 'browse' : '浏览'}
                </button>
              </p>
            </div>

            {/* Text Input */}
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
              rows={4}
              placeholder={content.upload.placeholder}
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              {content.upload.button}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {content.features.map((feature, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isEnglish ? 'How It Works' : '使用方法'}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {content.howItWorks.map((step, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isEnglish ? 'What Our Users Say' : '用户评价'}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isEnglish ? 'Choose Your Plan' : '选择您的方案'}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {content.pricing.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {isEnglish ? 'Choose Plan' : '选择方案'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {isEnglish ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          <div className="space-y-6">
            {content.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      selectedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`px-6 py-4 border-t transition-all duration-300 ${
                  selectedFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 Juson. {isEnglish ? 'All rights reserved.' : '版权所有。'}
            </p>
            <p className="text-gray-500 mt-2">
              {isEnglish ? 'Contact: ' : '联系方式：'}
              <a href="mailto:shoppy.2048@gmail.com" className="text-blue-600 hover:text-blue-700">
                shoppy.2048@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
const ADNOVA_I18N_STORAGE_KEY = 'adnovaLanguage';

const ADNOVA_TRANSLATIONS = {
  zh: {
    nav_features: '功能',
    nav_templates: '模板库',
    nav_pricing: '定价',
    nav_demo: '演示',
    nav_login: '登录',
    nav_trial: '免费试用',
    hero_title_main: 'AI驱动的广告营销',
    hero_title_sub: '让中小企业也能轻松获客',
    hero_desc: '无需专业设计和文案团队，AI帮你自动获取客户，一键生成广告 + 自动回复',
    hero_cta_start: '免费开始使用',
    hero_cta_demo: '观看演示',
    hero_note: '无需信用卡 · 14天免费试用 · 随时取消',
    features_title: '核心功能',
    features_desc: '专为中小企业打造的广告营销工具，让复杂的营销变得简单高效',
    pricing_title: '面试演示套餐',
    pricing_desc: '按面试场景设计，开箱即演示完整营销流程',
    plan_free_name: '面试体验版',
    plan_free_desc: '适合快速展示产品能力',
    plan_popular: '面试推荐',
    plan_pro_name: '面试实战版',
    plan_pro_desc: '适合完整演示获客闭环',
    plan_enterprise_name: '面试团队版',
    plan_enterprise_desc: '适合团队协作与高级权限演示',
    feature_ai_title: 'AI广告生成',
    feature_ai_desc: '输入产品信息，AI自动生成高转化广告文案、标题和CTA按钮，支持多行业和多语言',
    feature_ai_item_1: '智能文案生成',
    feature_ai_item_2: '多行业模板',
    feature_ai_item_3: '多语言支持',
    feature_template_title: '模板库',
    feature_template_desc: '精选高质量广告模板，覆盖美容、餐饮、装修等多个行业，一键使用或自定义编辑',
    feature_template_item_1: '行业分类模板',
    feature_template_item_2: '一键下载使用',
    feature_template_item_3: '支持自定义编辑',
    feature_bot_title: 'Bot系统',
    feature_bot_desc: '预设行业对话流程，一键导入到ManyChat，自动回复客户咨询，提高转化效率',
    feature_bot_item_1: '行业对话模板',
    feature_bot_item_2: '一键导入ManyChat',
    feature_bot_item_3: '自动客户跟进',
    feature_analytics_title: '数据分析',
    feature_analytics_desc: '实时监控广告效果，查看点击率、转化率等关键指标，优化营销策略',
    feature_analytics_item_1: '实时数据监控',
    feature_analytics_item_2: '多维度数据分析',
    feature_analytics_item_3: '效果对比报告',
    feature_integration_title: '多平台集成',
    feature_integration_desc: '无缝对接Facebook、Instagram等主流平台，一键发布广告，统一管理',
    feature_integration_item_1: '主流平台对接',
    feature_integration_item_2: '一键发布广告',
    feature_integration_item_3: '统一管理界面',
    feature_easy_title: '简单易用',
    feature_easy_desc: '直观的用户界面，无需专业技能，拖拽式操作，让广告营销变得简单有趣',
    feature_easy_item_1: '直观操作界面',
    feature_easy_item_2: '拖拽式设计',
    feature_easy_item_3: '快速上手',
    plan_period: '/月',
    plan_free_item_1: '每月生成10条广告',
    plan_free_item_2: '基础模板库访问',
    plan_free_item_3: '1个Bot流程',
    plan_free_item_4: '数据分析',
    plan_free_item_5: '多平台集成',
    plan_free_cta: '立即体验',
    plan_pro_item_1: '每月生成100条广告',
    plan_pro_item_2: '完整模板库访问',
    plan_pro_item_3: '5个Bot流程',
    plan_pro_item_4: '完整数据分析',
    plan_pro_item_5: 'Facebook/Instagram集成',
    plan_pro_cta: '立即使用面试版',
    plan_enterprise_item_1: '无限广告生成',
    plan_enterprise_item_2: '专属模板设计',
    plan_enterprise_item_3: '无限Bot流程',
    plan_enterprise_item_4: '高级数据分析',
    plan_enterprise_item_5: '全平台集成',
    plan_enterprise_cta: '联系顾问',
    dashboard_overview: '总览',
    dashboard_ad_generate: 'AI广告生成',
    dashboard_ad_publish: '广告发布',
    dashboard_templates: '模板库',
    dashboard_bot: 'Bot系统',
    dashboard_analytics: '数据分析',
    dashboard_settings: '设置',
    dashboard_pro_user: '专业版用户',
    dashboard_logout: '退出账号',
    dashboard_search_placeholder: '搜索...'
  },
  en: {
    nav_features: 'Features',
    nav_templates: 'Templates',
    nav_pricing: 'Pricing',
    nav_demo: 'Demo',
    nav_login: 'Login',
    nav_trial: 'Start Free',
    hero_title_main: 'AI-Powered Advertising',
    hero_title_sub: 'Easy customer growth for SMBs',
    hero_desc: 'No design or copywriting team needed. AI helps you generate ads and automate customer replies.',
    hero_cta_start: 'Start Free',
    hero_cta_demo: 'Watch Demo',
    hero_note: 'No credit card · 14-day free trial · Cancel anytime',
    features_title: 'Core Features',
    features_desc: 'Built for SMBs to make marketing simple, fast, and effective.',
    pricing_title: 'Interview-ready Plans',
    pricing_desc: 'Purpose-built packages for product demos in interview scenarios.',
    plan_free_name: 'Interview Starter',
    plan_free_desc: 'Best for quick product capability demos',
    plan_popular: 'Most Chosen',
    plan_pro_name: 'Interview Pro',
    plan_pro_desc: 'Best for full lead-generation walkthroughs',
    plan_enterprise_name: 'Interview Team',
    plan_enterprise_desc: 'Best for team collaboration and advanced permission demos',
    feature_ai_title: 'AI Ad Generation',
    feature_ai_desc: 'Enter product details and let AI generate high-converting copy, headlines, and CTAs for multiple industries and languages.',
    feature_ai_item_1: 'Smart copy generation',
    feature_ai_item_2: 'Industry-specific templates',
    feature_ai_item_3: 'Multi-language support',
    feature_template_title: 'Template Library',
    feature_template_desc: 'High-quality ad templates across beauty, food, renovation, and more with one-click use and custom editing.',
    feature_template_item_1: 'Industry categorized templates',
    feature_template_item_2: 'One-click download',
    feature_template_item_3: 'Custom editing support',
    feature_bot_title: 'Bot System',
    feature_bot_desc: 'Built-in conversation flows for each industry, one-click import to ManyChat, and automatic customer replies.',
    feature_bot_item_1: 'Industry conversation flows',
    feature_bot_item_2: 'One-click ManyChat import',
    feature_bot_item_3: 'Automated lead follow-up',
    feature_analytics_title: 'Analytics',
    feature_analytics_desc: 'Track ad performance in real time with CTR, conversion rate, and other key metrics to optimize campaigns.',
    feature_analytics_item_1: 'Real-time monitoring',
    feature_analytics_item_2: 'Multi-dimensional analytics',
    feature_analytics_item_3: 'Performance comparison reports',
    feature_integration_title: 'Multi-platform Integration',
    feature_integration_desc: 'Seamlessly connect Facebook, Instagram, and other major channels for one-click publishing and unified management.',
    feature_integration_item_1: 'Major platform connections',
    feature_integration_item_2: 'One-click ad publishing',
    feature_integration_item_3: 'Unified management workspace',
    feature_easy_title: 'Easy to Use',
    feature_easy_desc: 'An intuitive interface with drag-and-drop workflows, so anyone can launch campaigns without technical skills.',
    feature_easy_item_1: 'Intuitive UI',
    feature_easy_item_2: 'Drag-and-drop design',
    feature_easy_item_3: 'Fast onboarding',
    plan_period: '/month',
    plan_free_item_1: 'Generate 10 ads per month',
    plan_free_item_2: 'Basic template library access',
    plan_free_item_3: '1 bot flow',
    plan_free_item_4: 'Analytics',
    plan_free_item_5: 'Multi-platform integration',
    plan_free_cta: 'Try Now',
    plan_pro_item_1: 'Generate 100 ads per month',
    plan_pro_item_2: 'Full template library access',
    plan_pro_item_3: '5 bot flows',
    plan_pro_item_4: 'Full analytics',
    plan_pro_item_5: 'Facebook/Instagram integration',
    plan_pro_cta: 'Use Pro Demo Plan',
    plan_enterprise_item_1: 'Unlimited ad generation',
    plan_enterprise_item_2: 'Dedicated template design',
    plan_enterprise_item_3: 'Unlimited bot flows',
    plan_enterprise_item_4: 'Advanced analytics',
    plan_enterprise_item_5: 'All-platform integration',
    plan_enterprise_cta: 'Contact Sales',
    dashboard_overview: 'Overview',
    dashboard_ad_generate: 'AI Ad Generation',
    dashboard_ad_publish: 'Ad Publishing',
    dashboard_templates: 'Templates',
    dashboard_bot: 'Bot System',
    dashboard_analytics: 'Analytics',
    dashboard_settings: 'Settings',
    dashboard_pro_user: 'Pro User',
    dashboard_logout: 'Log Out',
    dashboard_search_placeholder: 'Search...'
  },
  ms: {
    nav_features: 'Ciri',
    nav_templates: 'Templat',
    nav_pricing: 'Harga',
    nav_demo: 'Demo',
    nav_login: 'Log masuk',
    nav_trial: 'Cuba Percuma',
    hero_title_main: 'Pengiklanan Dipacu AI',
    hero_title_sub: 'Mudah dapat pelanggan untuk SMB',
    hero_desc: 'Tidak perlu pasukan reka bentuk atau copywriting. AI bantu jana iklan dan automasi balasan pelanggan.',
    hero_cta_start: 'Mula Percuma',
    hero_cta_demo: 'Tonton Demo',
    hero_note: 'Tiada kad kredit · Percubaan 14 hari · Batal bila-bila masa',
    features_title: 'Fungsi Utama',
    features_desc: 'Dibina untuk SMB supaya pemasaran jadi lebih mudah, pantas, dan berkesan.',
    pricing_title: 'Pelan Demo Temuduga',
    pricing_desc: 'Pelan khas untuk demo produk dalam senario temuduga.',
    plan_free_name: 'Pelan Asas Temuduga',
    plan_free_desc: 'Sesuai untuk demo pantas keupayaan produk',
    plan_popular: 'Paling Popular',
    plan_pro_name: 'Pelan Pro Temuduga',
    plan_pro_desc: 'Sesuai untuk demo lengkap aliran perolehan prospek',
    plan_enterprise_name: 'Pelan Pasukan Temuduga',
    plan_enterprise_desc: 'Sesuai untuk kolaborasi pasukan dan demo akses lanjutan',
    plan_period: '/bulan'
  }
};

function applyTranslations(language) {
  const translations = ADNOVA_TRANSLATIONS[language] || ADNOVA_TRANSLATIONS.zh;

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;

  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (!key || !translations[key]) return;
    element.textContent = translations[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (!key || !translations[key]) return;
    element.setAttribute('placeholder', translations[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    if (!key || !translations[key]) return;
    element.setAttribute('title', translations[key]);
  });

  document.querySelectorAll('[data-language-selector]').forEach((selector) => {
    selector.value = language;
  });
}

function initLanguageSelector() {
  const selectors = document.querySelectorAll('[data-language-selector]');
  if (!selectors.length) return;

  const initialLanguage = localStorage.getItem(ADNOVA_I18N_STORAGE_KEY) || 'zh';
  applyTranslations(initialLanguage);

  selectors.forEach((selector) => {
    selector.addEventListener('change', (event) => {
      const language = event.target.value;
      localStorage.setItem(ADNOVA_I18N_STORAGE_KEY, language);
      applyTranslations(language);
    });
  });
}

document.addEventListener('DOMContentLoaded', initLanguageSelector);

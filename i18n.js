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
    plan_enterprise_desc: '适合团队协作与高级权限演示'
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
    plan_enterprise_desc: 'Best for team collaboration and advanced permission demos'
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
    plan_enterprise_desc: 'Sesuai untuk kolaborasi pasukan dan demo akses lanjutan'
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

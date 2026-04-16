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
    features_desc: '专为中小企业打造的广告营销工具，让复杂的营销变得简单高效'
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
    features_desc: 'Built for SMBs to make marketing simple, fast, and effective.'
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
    features_desc: 'Dibina untuk SMB supaya pemasaran jadi lebih mudah, pantas, dan berkesan.'
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

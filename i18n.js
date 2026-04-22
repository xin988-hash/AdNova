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
    dashboard_search_placeholder: '搜索...',
    login_title: 'AdNova - 登录',
    login_back_home: '返回首页',
    login_slogan: '像你常用的大平台一样，安全、清晰、好上手。',
    login_desc: '登录后即可继续使用你的广告素材、投放计划和客户线索数据。为确保账号安全，建议使用 8 位以上密码并定期更换。',
    login_welcome: '欢迎回来',
    login_subtitle: '请输入你的账号信息继续使用 AdNova',
    login_email: '邮箱',
    login_password: '密码',
    login_forgot: '忘记密码？',
    login_password_placeholder: '请输入密码',
    login_remember: '记住我（下次自动登录）',
    login_btn: '登录',
    login_loading: '登录中...',
    login_no_account: '还没有账号？',
    login_signup: '立即注册',
    login_msg_missing: '请输入邮箱和密码。',
    login_msg_success: '登录成功，正在进入控制台...',
    register_title: 'AdNova - 注册',
    register_back_home: '返回首页',
    register_slogan: '3 步完成注册，立刻开始投放和获客。',
    register_step_1: '创建账号并进入控制台',
    register_step_2: '选择行业模板快速生成广告',
    register_step_3: '连接 Bot 流程自动跟进客户',
    register_terms: '注册即代表你同意 AdNova 的服务条款与隐私政策。',
    register_create: '创建你的账户',
    register_subtitle: '只需一分钟，即可开始使用 AI 营销工作流',
    register_confirm_password: '确认密码',
    register_confirm_password_placeholder: '再次输入密码',
    register_btn: '注册并开始使用',
    register_loading: '注册中...',
    register_has_account: '已有账号？',
    register_goto_login: '去登录',
    register_pwd_placeholder: '至少 6 位，建议包含字母和数字',
    register_msg_need_email: '请输入邮箱地址。',
    register_msg_pwd_short: '密码至少需要 6 位。',
    register_msg_pwd_mismatch: '两次输入的密码不一致。',
    register_msg_auto_login_fail: '注册成功，但自动登录失败，请前往登录页重试。',
    register_msg_success: '注册成功，正在跳转到控制台...',
    workspace_title: 'AdNova - 投放工作台',
    workspace_back_dashboard: '返回后台',
    workspace_main_title: '广告投放工作台',
    workspace_main_desc: '这里是下一步页面，整体风格与主站保持一致：白底卡片、蓝色强调色、圆角+轻阴影。',
    workspace_step1: '步骤 1：选择投放渠道',
    workspace_step2: '步骤 2：预算与时间',
    workspace_budget_placeholder: '每日预算（RM）',
    workspace_days_placeholder: '投放天数',
    workspace_preview: '实时预览',
    workspace_channel_unselected: '未选择',
    workspace_label_channel: '渠道',
    workspace_label_budget: '预算',
    workspace_label_period: '周期',
    workspace_days_unit: '天',
    workspace_launch: '开始投放',
    workspace_from_unknown: '未知页面',
    workspace_tpl_unnamed: '未命名模板',
    workspace_from_text: '已从「{from}」进入。已选择：{template}{category}{industry}。请继续设置预算并开始投放。',
    workspace_from_category: '（{category}）',
    workspace_from_industry: '，行业：{industry}',
    workspace_alert_incomplete: '请先完成渠道、预算和投放天数设置。',
    workspace_alert_created: '已创建投放计划：{channel} / RM{budget} / {days}天',
    ad_result_back: '返回AI广告输入页',
    ad_result_title: 'AI广告生成结果',
    ad_result_loading: '正在读取您刚刚提交的广告需求...',
    ad_result_suggestions: '广告标题/文案建议',
    ad_result_copy_all: '复制全部',
    ad_result_vocab: 'AI词汇与表达教学',
    ad_result_guide: '视频/图片素材拍摄教程（详细）',
    ad_result_video: '短视频教程（15-30秒）',
    ad_result_image: '图片素材教程（信息流）',
    ad_result_back_edit: '返回修改输入',
    ad_result_to_publish: '进入广告发布页面',
    ad_result_context: '行业：{industry} ｜目标：{goal} ｜地区：{country} / {city}',
    ad_result_ad_item: '广告 {serialNo}',
    ad_result_copy_item: '复制此条',
    ad_result_recommend_vocab: '推荐词汇',
    ad_result_vocab_usage: '用法：将该词放在标题前半句，强化价值表达。',
    ad_result_copy_ok: '已复制该条文案',
    ad_result_copy_all_ok: '已复制全部文案',
    ad_result_copy_fail: '复制失败，请手动复制',
    ad_result_industry_beauty: '美容美发',
    ad_result_industry_food: '餐饮美食',
    ad_result_industry_decor: '装修设计',
    ad_result_industry_fitness: '健身运动',
    ad_result_industry_education: '教育培训',
    ad_result_industry_retail: '零售购物',
    ad_result_industry_service: '生活服务',
    ad_result_goal_leads: '获取潜在客户',
    ad_result_goal_traffic: '增加网站流量'
  },
  en: {
    nav_features: 'Features', nav_templates: 'Templates', nav_pricing: 'Pricing', nav_demo: 'Demo', nav_login: 'Login', nav_trial: 'Start Free',
    hero_title_main: 'AI-Powered Advertising', hero_title_sub: 'Easy customer growth for SMBs',
    hero_desc: 'No design or copywriting team needed. AI helps you generate ads and automate customer replies.',
    hero_cta_start: 'Start Free', hero_cta_demo: 'Watch Demo', hero_note: 'No credit card · 14-day free trial · Cancel anytime',
    features_title: 'Core Features', features_desc: 'Built for SMBs to make marketing simple, fast, and effective.',
    pricing_title: 'Interview-ready Plans', pricing_desc: 'Purpose-built packages for product demos in interview scenarios.',
    plan_free_name: 'Interview Starter', plan_free_desc: 'Best for quick product capability demos', plan_popular: 'Most Chosen',
    plan_pro_name: 'Interview Pro', plan_pro_desc: 'Best for full lead-generation walkthroughs',
    plan_enterprise_name: 'Interview Team', plan_enterprise_desc: 'Best for team collaboration and advanced permission demos',
    feature_ai_title: 'AI Ad Generation', feature_ai_desc: 'Enter product details and let AI generate high-converting copy, headlines, and CTAs for multiple industries and languages.',
    feature_ai_item_1: 'Smart copy generation', feature_ai_item_2: 'Industry-specific templates', feature_ai_item_3: 'Multi-language support',
    feature_template_title: 'Template Library', feature_template_desc: 'High-quality ad templates across beauty, food, renovation, and more with one-click use and custom editing.',
    feature_template_item_1: 'Industry categorized templates', feature_template_item_2: 'One-click download', feature_template_item_3: 'Custom editing support',
    feature_bot_title: 'Bot System', feature_bot_desc: 'Built-in conversation flows for each industry, one-click import to ManyChat, and automatic customer replies.',
    feature_bot_item_1: 'Industry conversation flows', feature_bot_item_2: 'One-click ManyChat import', feature_bot_item_3: 'Automated lead follow-up',
    feature_analytics_title: 'Analytics', feature_analytics_desc: 'Track ad performance in real time with CTR, conversion rate, and other key metrics to optimize campaigns.',
    feature_analytics_item_1: 'Real-time monitoring', feature_analytics_item_2: 'Multi-dimensional analytics', feature_analytics_item_3: 'Performance comparison reports',
    feature_integration_title: 'Multi-platform Integration', feature_integration_desc: 'Seamlessly connect Facebook, Instagram, and other major channels for one-click publishing and unified management.',
    feature_integration_item_1: 'Major platform connections', feature_integration_item_2: 'One-click ad publishing', feature_integration_item_3: 'Unified management workspace',
    feature_easy_title: 'Easy to Use', feature_easy_desc: 'An intuitive interface with drag-and-drop workflows, so anyone can launch campaigns without technical skills.',
    feature_easy_item_1: 'Intuitive UI', feature_easy_item_2: 'Drag-and-drop design', feature_easy_item_3: 'Fast onboarding',
    plan_period: '/month', plan_free_item_1: 'Generate 10 ads per month', plan_free_item_2: 'Basic template library access', plan_free_item_3: '1 bot flow',
    plan_free_item_4: 'Analytics', plan_free_item_5: 'Multi-platform integration', plan_free_cta: 'Try Now',
    plan_pro_item_1: 'Generate 100 ads per month', plan_pro_item_2: 'Full template library access', plan_pro_item_3: '5 bot flows',
    plan_pro_item_4: 'Full analytics', plan_pro_item_5: 'Facebook/Instagram integration', plan_pro_cta: 'Use Pro Demo Plan',
    plan_enterprise_item_1: 'Unlimited ad generation', plan_enterprise_item_2: 'Dedicated template design', plan_enterprise_item_3: 'Unlimited bot flows',
    plan_enterprise_item_4: 'Advanced analytics', plan_enterprise_item_5: 'All-platform integration', plan_enterprise_cta: 'Contact Sales',
    dashboard_overview: 'Overview', dashboard_ad_generate: 'AI Ad Generation', dashboard_ad_publish: 'Ad Publishing', dashboard_templates: 'Templates',
    dashboard_bot: 'Bot System', dashboard_analytics: 'Analytics', dashboard_settings: 'Settings', dashboard_pro_user: 'Pro User', dashboard_logout: 'Log Out', dashboard_search_placeholder: 'Search...',
    login_title: 'AdNova - Login', login_back_home: 'Back to Home', login_slogan: 'Secure, clear, and easy to use—just like top platforms.',
    login_desc: 'Sign in to continue with your ad assets, launch plans, and leads data. For security, use a password with at least 8 characters and update it regularly.',
    login_welcome: 'Welcome Back', login_subtitle: 'Enter your account information to continue with AdNova', login_email: 'Email', login_password: 'Password',
    login_forgot: 'Forgot password?', login_password_placeholder: 'Enter your password', login_remember: 'Remember me (auto-login next time)',
    login_btn: 'Login', login_loading: 'Signing in...', login_no_account: 'Don’t have an account?', login_signup: 'Sign up now', login_msg_missing: 'Please enter email and password.', login_msg_success: 'Login successful, redirecting to dashboard...',
    register_title: 'AdNova - Register', register_back_home: 'Back to Home', register_slogan: 'Complete sign-up in 3 steps and start launching campaigns now.',
    register_step_1: 'Create your account and enter the dashboard', register_step_2: 'Choose industry templates to generate ads fast', register_step_3: 'Connect bot flows for automatic follow-up',
    register_terms: 'By registering, you agree to AdNova’s Terms of Service and Privacy Policy.', register_create: 'Create Your Account',
    register_subtitle: 'Start your AI marketing workflow in just one minute', register_confirm_password: 'Confirm Password', register_confirm_password_placeholder: 'Enter password again',
    register_btn: 'Register and Start', register_loading: 'Registering...', register_has_account: 'Already have an account?', register_goto_login: 'Go to login', register_pwd_placeholder: 'At least 6 characters, letters and numbers recommended',
    register_msg_need_email: 'Please enter your email address.', register_msg_pwd_short: 'Password must be at least 6 characters.', register_msg_pwd_mismatch: 'Passwords do not match.',
    register_msg_auto_login_fail: 'Registration succeeded, but auto-login failed. Please try login page.', register_msg_success: 'Registration successful, redirecting to dashboard...',
    workspace_title: 'AdNova - Campaign Workspace', workspace_back_dashboard: 'Back to Dashboard', workspace_main_title: 'Ad Campaign Workspace',
    workspace_main_desc: 'This is the next-step page. It keeps the same visual style: white cards, blue accents, rounded corners, and light shadows.',
    workspace_step1: 'Step 1: Select Channel', workspace_step2: 'Step 2: Budget & Schedule', workspace_budget_placeholder: 'Daily budget (RM)', workspace_days_placeholder: 'Campaign days',
    workspace_preview: 'Live Preview', workspace_channel_unselected: 'Not selected', workspace_label_channel: 'Channel', workspace_label_budget: 'Budget', workspace_label_period: 'Duration', workspace_days_unit: 'days', workspace_launch: 'Launch Campaign',
    workspace_from_unknown: 'unknown page', workspace_tpl_unnamed: 'untitled template', workspace_from_text: 'Entered from "{from}". Selected: {template}{category}{industry}. Please set budget and launch.', workspace_from_category: ' ({category})', workspace_from_industry: ', industry: {industry}',
    workspace_alert_incomplete: 'Please complete channel, budget, and campaign days first.', workspace_alert_created: 'Campaign created: {channel} / RM{budget} / {days} days',
    ad_result_back: 'Back to AI ad input', ad_result_title: 'AI Ad Generation Results', ad_result_loading: 'Loading your submitted ad request...', ad_result_suggestions: 'Headline/Copy Suggestions', ad_result_copy_all: 'Copy All',
    ad_result_vocab: 'AI Vocabulary & Expression Tips', ad_result_guide: 'Video/Image Shooting Guide (Detailed)', ad_result_video: 'Short Video Guide (15-30s)', ad_result_image: 'Image Asset Guide (Feed)',
    ad_result_back_edit: 'Back to Edit Input', ad_result_to_publish: 'Go to Ad Publishing', ad_result_context: 'Industry: {industry} | Goal: {goal} | Region: {country} / {city}',
    ad_result_ad_item: 'Ad {serialNo}', ad_result_copy_item: 'Copy this one', ad_result_recommend_vocab: 'Recommended Word', ad_result_vocab_usage: 'Usage: place this in the first half of the headline to strengthen value expression.',
    ad_result_copy_ok: 'Copied this ad copy.', ad_result_copy_all_ok: 'All copies copied.', ad_result_copy_fail: 'Copy failed. Please copy manually.',
    ad_result_industry_beauty: 'Beauty & Hair', ad_result_industry_food: 'Food & Dining', ad_result_industry_decor: 'Home Decor', ad_result_industry_fitness: 'Fitness', ad_result_industry_education: 'Education', ad_result_industry_retail: 'Retail', ad_result_industry_service: 'Local Services',
    ad_result_goal_leads: 'Generate Leads', ad_result_goal_traffic: 'Increase Website Traffic'
  },
  ms: {
    nav_features: 'Ciri', nav_templates: 'Templat', nav_pricing: 'Harga', nav_demo: 'Demo', nav_login: 'Log masuk', nav_trial: 'Cuba Percuma',
    hero_title_main: 'Pengiklanan Dipacu AI', hero_title_sub: 'Mudah dapat pelanggan untuk SMB',
    hero_desc: 'Tidak perlu pasukan reka bentuk atau copywriting. AI bantu jana iklan dan automasi balasan pelanggan.',
    hero_cta_start: 'Mula Percuma', hero_cta_demo: 'Tonton Demo', hero_note: 'Tiada kad kredit · Percubaan 14 hari · Batal bila-bila masa',
    features_title: 'Fungsi Utama', features_desc: 'Dibina untuk SMB supaya pemasaran jadi lebih mudah, pantas, dan berkesan.',
    pricing_title: 'Pelan Demo Temuduga', pricing_desc: 'Pelan khas untuk demo produk dalam senario temuduga.',
    plan_free_name: 'Pelan Asas Temuduga', plan_free_desc: 'Sesuai untuk demo pantas keupayaan produk', plan_popular: 'Paling Popular',
    plan_pro_name: 'Pelan Pro Temuduga', plan_pro_desc: 'Sesuai untuk demo lengkap aliran perolehan prospek',
    plan_enterprise_name: 'Pelan Pasukan Temuduga', plan_enterprise_desc: 'Sesuai untuk kolaborasi pasukan dan demo akses lanjutan',
    feature_ai_title: 'Penjanaan Iklan AI', feature_ai_desc: 'Masukkan maklumat produk dan biar AI jana salinan, tajuk, dan CTA berprestasi tinggi untuk pelbagai industri dan bahasa.',
    feature_ai_item_1: 'Penjanaan salinan pintar', feature_ai_item_2: 'Templat ikut industri', feature_ai_item_3: 'Sokongan pelbagai bahasa',
    feature_template_title: 'Perpustakaan Templat', feature_template_desc: 'Templat iklan berkualiti tinggi untuk kecantikan, makanan, renovasi dan lain-lain dengan penggunaan sekali klik dan suntingan tersuai.',
    feature_template_item_1: 'Templat mengikut kategori industri', feature_template_item_2: 'Muat turun sekali klik', feature_template_item_3: 'Sokongan suntingan tersuai',
    feature_bot_title: 'Sistem Bot', feature_bot_desc: 'Aliran perbualan terbina untuk setiap industri, import ke ManyChat dengan sekali klik dan balasan pelanggan automatik.',
    feature_bot_item_1: 'Aliran perbualan industri', feature_bot_item_2: 'Import ManyChat sekali klik', feature_bot_item_3: 'Susulan prospek automatik',
    feature_analytics_title: 'Analitik', feature_analytics_desc: 'Pantau prestasi iklan masa nyata melalui CTR, kadar penukaran dan metrik utama lain untuk optimasi kempen.',
    feature_analytics_item_1: 'Pemantauan masa nyata', feature_analytics_item_2: 'Analitik pelbagai dimensi', feature_analytics_item_3: 'Laporan perbandingan prestasi',
    feature_integration_title: 'Integrasi Pelbagai Platform', feature_integration_desc: 'Sambung Facebook, Instagram dan saluran utama lain dengan lancar untuk penerbitan sekali klik dan pengurusan berpusat.',
    feature_integration_item_1: 'Sambungan platform utama', feature_integration_item_2: 'Penerbitan iklan sekali klik', feature_integration_item_3: 'Ruang kerja pengurusan berpusat',
    feature_easy_title: 'Mudah Digunakan', feature_easy_desc: 'Antara muka intuitif dengan aliran seret-dan-lepas supaya sesiapa pun boleh lancarkan kempen tanpa kemahiran teknikal.',
    feature_easy_item_1: 'UI intuitif', feature_easy_item_2: 'Reka bentuk seret-dan-lepas', feature_easy_item_3: 'Onboarding pantas',
    plan_period: '/bulan', plan_free_item_1: 'Jana 10 iklan sebulan', plan_free_item_2: 'Akses perpustakaan templat asas', plan_free_item_3: '1 aliran bot',
    plan_free_item_4: 'Analitik', plan_free_item_5: 'Integrasi pelbagai platform', plan_free_cta: 'Cuba Sekarang',
    plan_pro_item_1: 'Jana 100 iklan sebulan', plan_pro_item_2: 'Akses perpustakaan templat penuh', plan_pro_item_3: '5 aliran bot',
    plan_pro_item_4: 'Analitik penuh', plan_pro_item_5: 'Integrasi Facebook/Instagram', plan_pro_cta: 'Guna Pelan Demo Pro',
    plan_enterprise_item_1: 'Penjanaan iklan tanpa had', plan_enterprise_item_2: 'Reka bentuk templat khusus', plan_enterprise_item_3: 'Aliran bot tanpa had',
    plan_enterprise_item_4: 'Analitik lanjutan', plan_enterprise_item_5: 'Integrasi semua platform', plan_enterprise_cta: 'Hubungi Jualan',
    dashboard_overview: 'Gambaran Keseluruhan', dashboard_ad_generate: 'Penjanaan Iklan AI', dashboard_ad_publish: 'Penerbitan Iklan', dashboard_templates: 'Templat',
    dashboard_bot: 'Sistem Bot', dashboard_analytics: 'Analitik', dashboard_settings: 'Tetapan', dashboard_pro_user: 'Pengguna Pro', dashboard_logout: 'Log Keluar', dashboard_search_placeholder: 'Cari...',
    login_title: 'AdNova - Log masuk', login_back_home: 'Kembali ke Laman Utama', login_slogan: 'Selamat, jelas, dan mudah digunakan seperti platform utama.',
    login_desc: 'Log masuk untuk terus gunakan aset iklan, pelan pelancaran, dan data prospek anda. Untuk keselamatan, guna kata laluan sekurang-kurangnya 8 aksara dan tukar secara berkala.',
    login_welcome: 'Selamat Kembali', login_subtitle: 'Masukkan maklumat akaun anda untuk teruskan dengan AdNova', login_email: 'E-mel', login_password: 'Kata laluan',
    login_forgot: 'Lupa kata laluan?', login_password_placeholder: 'Masukkan kata laluan anda', login_remember: 'Ingat saya (auto log masuk lain kali)',
    login_btn: 'Log masuk', login_loading: 'Sedang log masuk...', login_no_account: 'Belum ada akaun?', login_signup: 'Daftar sekarang', login_msg_missing: 'Sila masukkan e-mel dan kata laluan.', login_msg_success: 'Log masuk berjaya, sedang ke dashboard...',
    register_title: 'AdNova - Daftar', register_back_home: 'Kembali ke Laman Utama', register_slogan: 'Selesaikan pendaftaran dalam 3 langkah dan mula lancarkan kempen sekarang.',
    register_step_1: 'Cipta akaun dan masuk ke dashboard', register_step_2: 'Pilih templat industri untuk jana iklan dengan cepat', register_step_3: 'Sambung aliran bot untuk susulan automatik',
    register_terms: 'Dengan mendaftar, anda bersetuju dengan Terma Perkhidmatan dan Polisi Privasi AdNova.', register_create: 'Cipta Akaun Anda',
    register_subtitle: 'Mulakan aliran kerja pemasaran AI anda dalam satu minit', register_confirm_password: 'Sahkan Kata Laluan', register_confirm_password_placeholder: 'Masukkan semula kata laluan',
    register_btn: 'Daftar dan Mula', register_loading: 'Sedang mendaftar...', register_has_account: 'Sudah ada akaun?', register_goto_login: 'Pergi log masuk', register_pwd_placeholder: 'Sekurang-kurangnya 6 aksara, huruf dan nombor disyorkan',
    register_msg_need_email: 'Sila masukkan alamat e-mel anda.', register_msg_pwd_short: 'Kata laluan mesti sekurang-kurangnya 6 aksara.', register_msg_pwd_mismatch: 'Kata laluan tidak sepadan.',
    register_msg_auto_login_fail: 'Pendaftaran berjaya tetapi auto log masuk gagal. Sila cuba halaman log masuk.', register_msg_success: 'Pendaftaran berjaya, sedang ke dashboard...',
    workspace_title: 'AdNova - Ruang Kerja Kempen', workspace_back_dashboard: 'Kembali ke Dashboard', workspace_main_title: 'Ruang Kerja Kempen Iklan',
    workspace_main_desc: 'Ini halaman langkah seterusnya. Gaya visual dikekalkan: kad putih, aksen biru, bucu bulat, dan bayang ringan.',
    workspace_step1: 'Langkah 1: Pilih Saluran', workspace_step2: 'Langkah 2: Bajet & Jadual', workspace_budget_placeholder: 'Bajet harian (RM)', workspace_days_placeholder: 'Hari kempen',
    workspace_preview: 'Pratonton Langsung', workspace_channel_unselected: 'Belum dipilih', workspace_label_channel: 'Saluran', workspace_label_budget: 'Bajet', workspace_label_period: 'Tempoh', workspace_days_unit: 'hari', workspace_launch: 'Lancarkan Kempen',
    workspace_from_unknown: 'halaman tidak diketahui', workspace_tpl_unnamed: 'templat tanpa nama', workspace_from_text: 'Masuk dari "{from}". Dipilih: {template}{category}{industry}. Sila tetapkan bajet dan lancarkan.', workspace_from_category: ' ({category})', workspace_from_industry: ', industri: {industry}',
    workspace_alert_incomplete: 'Sila lengkapkan saluran, bajet, dan hari kempen dahulu.', workspace_alert_created: 'Kempen dicipta: {channel} / RM{budget} / {days} hari',
    ad_result_back: 'Kembali ke input iklan AI', ad_result_title: 'Keputusan Penjanaan Iklan AI', ad_result_loading: 'Sedang memuat permintaan iklan yang anda hantar...', ad_result_suggestions: 'Cadangan Tajuk/Salinan', ad_result_copy_all: 'Salin Semua',
    ad_result_vocab: 'Tip Perkataan & Ekspresi AI', ad_result_guide: 'Panduan Rakaman Video/Imej (Terperinci)', ad_result_video: 'Panduan Video Pendek (15-30s)', ad_result_image: 'Panduan Aset Imej (Feed)',
    ad_result_back_edit: 'Kembali Ubah Input', ad_result_to_publish: 'Pergi ke Penerbitan Iklan', ad_result_context: 'Industri: {industry} | Matlamat: {goal} | Kawasan: {country} / {city}',
    ad_result_ad_item: 'Iklan {serialNo}', ad_result_copy_item: 'Salin ini', ad_result_recommend_vocab: 'Perkataan Disyorkan', ad_result_vocab_usage: 'Cara guna: letakkan perkataan ini di bahagian awal tajuk untuk menguatkan nilai.',
    ad_result_copy_ok: 'Salinan iklan telah disalin.', ad_result_copy_all_ok: 'Semua salinan telah disalin.', ad_result_copy_fail: 'Gagal menyalin. Sila salin secara manual.',
    ad_result_industry_beauty: 'Kecantikan & Rambut', ad_result_industry_food: 'Makanan & Restoran', ad_result_industry_decor: 'Hiasan Rumah', ad_result_industry_fitness: 'Kecergasan', ad_result_industry_education: 'Pendidikan', ad_result_industry_retail: 'Runcit', ad_result_industry_service: 'Perkhidmatan Tempatan',
    ad_result_goal_leads: 'Dapatkan Prospek', ad_result_goal_traffic: 'Tambah Trafik Laman Web'
  }
};

function getCurrentLanguage() {
  return localStorage.getItem(ADNOVA_I18N_STORAGE_KEY) || 'zh';
}

function t(key, language = getCurrentLanguage(), params = {}) {
  const table = ADNOVA_TRANSLATIONS[language] || ADNOVA_TRANSLATIONS.zh;
  const fallback = ADNOVA_TRANSLATIONS.zh;
  const raw = table[key] || fallback[key] || key;
  return Object.entries(params).reduce((text, [paramKey, value]) => text.replaceAll(`{${paramKey}}`, String(value)), raw);
}

function applyTranslations(language) {
  const resolvedLanguage = ADNOVA_TRANSLATIONS[language] ? language : 'zh';
  document.documentElement.lang = resolvedLanguage === 'zh' ? 'zh-CN' : resolvedLanguage;

  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    if (!key) return;
    element.textContent = t(key, resolvedLanguage);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (!key) return;
    element.setAttribute('placeholder', t(key, resolvedLanguage));
  });

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    if (!key) return;
    element.setAttribute('title', t(key, resolvedLanguage));
  });

  document.querySelectorAll('[data-i18n-page-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-page-title');
    if (!key) return;
    document.title = t(key, resolvedLanguage);
  });

  document.querySelectorAll('[data-language-selector]').forEach((selector) => {
    selector.value = resolvedLanguage;
  });

  document.dispatchEvent(new CustomEvent('adnova:language-change', { detail: { language: resolvedLanguage } }));
}

function initLanguageSelector() {
  const initialLanguage = getCurrentLanguage();
  applyTranslations(initialLanguage);

  document.querySelectorAll('[data-language-selector]').forEach((selector) => {
    selector.addEventListener('change', (event) => {
      const language = event.target.value;
      localStorage.setItem(ADNOVA_I18N_STORAGE_KEY, language);
      applyTranslations(language);
    });
  });
}

window.AdnovaI18n = { t, getCurrentLanguage, applyTranslations };
document.addEventListener('DOMContentLoaded', initLanguageSelector);

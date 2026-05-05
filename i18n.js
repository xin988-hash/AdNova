const ADNOVA_I18N_STORAGE_KEY = 'adnovaLanguage';

const ADNOVA_TRANSLATIONS = {
  zh: {
    nav_features: '功能',
    nav_resources: '素材管理',
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
    feature_ai_item_2: '多行业适配',
    feature_ai_item_3: '多语言支持',
    feature_asset_title: '素材管理',
    feature_asset_desc: '精选高质量广告素材，覆盖美容、餐饮、装修等多个行业，一键使用或自定义编辑',
    feature_asset_item_1: '行业分类素材',
    feature_asset_item_2: '一键下载使用',
    feature_asset_item_3: '支持自定义编辑',
    feature_bot_title: 'Bot系统',
    feature_bot_desc: '预设行业对话流程，一键导入到ManyChat，自动回复客户咨询，提高转化效率',
    feature_bot_item_1: '行业对话流程',
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
    plan_free_item_2: '基础素材管理',
    plan_free_item_3: '1个Bot流程',
    plan_free_item_4: '数据分析',
    plan_free_item_5: '多平台集成',
    plan_free_cta: '立即体验',
    plan_pro_item_1: '每月生成100条广告',
    plan_pro_item_2: '完整素材管理',
    plan_pro_item_3: '5个Bot流程',
    plan_pro_item_4: '完整数据分析',
    plan_pro_item_5: 'Facebook/Instagram集成',
    plan_pro_cta: '立即使用面试版',
    plan_enterprise_item_1: '无限广告生成',
    plan_enterprise_item_2: '专属广告方案',
    plan_enterprise_item_3: '无限Bot流程',
    plan_enterprise_item_4: '高级数据分析',
    plan_enterprise_item_5: '全平台集成',
    plan_enterprise_cta: '联系顾问',
    dashboard_overview: '总览',
    dashboard_ad_generate: 'AI广告生成',
    dashboard_ad_publish: '广告发布',
    dashboard_resources: '素材管理',
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
    register_step_2: '填写行业信息快速生成广告',
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
    workspace_item_unnamed: '未命名广告',
    workspace_from_text: '已从「{from}」进入。已选择：{category}{industry}。请继续设置预算并开始投放。',
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
    nav_features: 'Features', nav_resources: 'Ads', nav_pricing: 'Pricing', nav_demo: 'Demo', nav_login: 'Login', nav_trial: 'Start Free',
    hero_title_main: 'AI-Powered Advertising', hero_title_sub: 'Easy customer growth for SMBs',
    hero_desc: 'No design or copywriting team needed. AI helps you generate ads and automate customer replies.',
    hero_cta_start: 'Start Free', hero_cta_demo: 'Watch Demo', hero_note: 'No credit card · 14-day free trial · Cancel anytime',
    features_title: 'Core Features', features_desc: 'Built for SMBs to make marketing simple, fast, and effective.',
    pricing_title: 'Interview-ready Plans', pricing_desc: 'Purpose-built packages for product demos in interview scenarios.',
    plan_free_name: 'Interview Starter', plan_free_desc: 'Best for quick product capability demos', plan_popular: 'Most Chosen',
    plan_pro_name: 'Interview Pro', plan_pro_desc: 'Best for full lead-generation walkthroughs',
    plan_enterprise_name: 'Interview Team', plan_enterprise_desc: 'Best for team collaboration and advanced permission demos',
    feature_ai_title: 'AI Ad Generation', feature_ai_desc: 'Enter product details and let AI generate high-converting copy, headlines, and CTAs for multiple industries and languages.',
    feature_ai_item_1: 'Smart copy generation', feature_ai_item_2: 'Industry-specific ads', feature_ai_item_3: 'Multi-language support',
    feature_asset_title: 'Creative Management', feature_asset_desc: 'Manage ad creatives across beauty, food, renovation, and more with one-click use and custom editing.',
    feature_asset_item_1: 'Industry categorized ads', feature_asset_item_2: 'One-click download', feature_asset_item_3: 'Custom editing support',
    feature_bot_title: 'Bot System', feature_bot_desc: 'Built-in conversation flows for each industry, one-click import to ManyChat, and automatic customer replies.',
    feature_bot_item_1: 'Industry conversation flows', feature_bot_item_2: 'One-click ManyChat import', feature_bot_item_3: 'Automated lead follow-up',
    feature_analytics_title: 'Analytics', feature_analytics_desc: 'Track ad performance in real time with CTR, conversion rate, and other key metrics to optimize campaigns.',
    feature_analytics_item_1: 'Real-time monitoring', feature_analytics_item_2: 'Multi-dimensional analytics', feature_analytics_item_3: 'Performance comparison reports',
    feature_integration_title: 'Multi-platform Integration', feature_integration_desc: 'Seamlessly connect Facebook, Instagram, and other major channels for one-click publishing and unified management.',
    feature_integration_item_1: 'Major platform connections', feature_integration_item_2: 'One-click ad publishing', feature_integration_item_3: 'Unified management workspace',
    feature_easy_title: 'Easy to Use', feature_easy_desc: 'An intuitive interface with drag-and-drop workflows, so anyone can launch campaigns without technical skills.',
    feature_easy_item_1: 'Intuitive UI', feature_easy_item_2: 'Drag-and-drop design', feature_easy_item_3: 'Fast onboarding',
    plan_period: '/month', plan_free_item_1: 'Generate 10 ads per month', plan_free_item_2: 'Basic creative management', plan_free_item_3: '1 bot flow',
    plan_free_item_4: 'Analytics', plan_free_item_5: 'Multi-platform integration', plan_free_cta: 'Try Now',
    plan_pro_item_1: 'Generate 100 ads per month', plan_pro_item_2: 'Full creative management', plan_pro_item_3: '5 bot flows',
    plan_pro_item_4: 'Full analytics', plan_pro_item_5: 'Facebook/Instagram integration', plan_pro_cta: 'Use Pro Demo Plan',
    plan_enterprise_item_1: 'Unlimited ad generation', plan_enterprise_item_2: 'Dedicated ad design', plan_enterprise_item_3: 'Unlimited bot flows',
    plan_enterprise_item_4: 'Advanced analytics', plan_enterprise_item_5: 'All-platform integration', plan_enterprise_cta: 'Contact Sales',
    dashboard_overview: 'Overview', dashboard_ad_generate: 'AI Ad Generation', dashboard_ad_publish: 'Ad Publishing', dashboard_resources: 'Ads',
    dashboard_bot: 'Bot System', dashboard_analytics: 'Analytics', dashboard_settings: 'Settings', dashboard_pro_user: 'Pro User', dashboard_logout: 'Log Out', dashboard_search_placeholder: 'Search...',
    login_title: 'AdNova - Login', login_back_home: 'Back to Home', login_slogan: 'Secure, clear, and easy to use—just like top platforms.',
    login_desc: 'Sign in to continue with your ad assets, launch plans, and leads data. For security, use a password with at least 8 characters and update it regularly.',
    login_welcome: 'Welcome Back', login_subtitle: 'Enter your account information to continue with AdNova', login_email: 'Email', login_password: 'Password',
    login_forgot: 'Forgot password?', login_password_placeholder: 'Enter your password', login_remember: 'Remember me (auto-login next time)',
    login_btn: 'Login', login_loading: 'Signing in...', login_no_account: 'Don’t have an account?', login_signup: 'Sign up now', login_msg_missing: 'Please enter email and password.', login_msg_success: 'Login successful, redirecting to dashboard...',
    register_title: 'AdNova - Register', register_back_home: 'Back to Home', register_slogan: 'Complete sign-up in 3 steps and start launching campaigns now.',
    register_step_1: 'Create your account and enter the dashboard', register_step_2: 'Choose industry ads to generate ads fast', register_step_3: 'Connect bot flows for automatic follow-up',
    register_terms: 'By registering, you agree to AdNova’s Terms of Service and Privacy Policy.', register_create: 'Create Your Account',
    register_subtitle: 'Start your AI marketing workflow in just one minute', register_confirm_password: 'Confirm Password', register_confirm_password_placeholder: 'Enter password again',
    register_btn: 'Register and Start', register_loading: 'Registering...', register_has_account: 'Already have an account?', register_goto_login: 'Go to login', register_pwd_placeholder: 'At least 6 characters, letters and numbers recommended',
    register_msg_need_email: 'Please enter your email address.', register_msg_pwd_short: 'Password must be at least 6 characters.', register_msg_pwd_mismatch: 'Passwords do not match.',
    register_msg_auto_login_fail: 'Registration succeeded, but auto-login failed. Please try login page.', register_msg_success: 'Registration successful, redirecting to dashboard...',
    workspace_title: 'AdNova - Campaign Workspace', workspace_back_dashboard: 'Back to Dashboard', workspace_main_title: 'Ad Campaign Workspace',
    workspace_main_desc: 'This is the next-step page. It keeps the same visual style: white cards, blue accents, rounded corners, and light shadows.',
    workspace_step1: 'Step 1: Select Channel', workspace_step2: 'Step 2: Budget & Schedule', workspace_budget_placeholder: 'Daily budget (RM)', workspace_days_placeholder: 'Campaign days',
    workspace_preview: 'Live Preview', workspace_channel_unselected: 'Not selected', workspace_label_channel: 'Channel', workspace_label_budget: 'Budget', workspace_label_period: 'Duration', workspace_days_unit: 'days', workspace_launch: 'Launch Campaign',
    workspace_from_unknown: 'unknown page', workspace_item_unnamed: 'untitled ad', workspace_from_text: 'Entered from "{from}". Selected: {category}{industry}. Please set budget and launch.', workspace_from_category: ' ({category})', workspace_from_industry: ', industry: {industry}',
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
    nav_features: 'Ciri', nav_resources: 'Iklan', nav_pricing: 'Harga', nav_demo: 'Demo', nav_login: 'Log masuk', nav_trial: 'Cuba Percuma',
    hero_title_main: 'Pengiklanan Dipacu AI', hero_title_sub: 'Mudah dapat pelanggan untuk SMB',
    hero_desc: 'Tidak perlu pasukan reka bentuk atau copywriting. AI bantu jana iklan dan automasi balasan pelanggan.',
    hero_cta_start: 'Mula Percuma', hero_cta_demo: 'Tonton Demo', hero_note: 'Tiada kad kredit · Percubaan 14 hari · Batal bila-bila masa',
    features_title: 'Fungsi Utama', features_desc: 'Dibina untuk SMB supaya pemasaran jadi lebih mudah, pantas, dan berkesan.',
    pricing_title: 'Pelan Demo Temuduga', pricing_desc: 'Pelan khas untuk demo produk dalam senario temuduga.',
    plan_free_name: 'Pelan Asas Temuduga', plan_free_desc: 'Sesuai untuk demo pantas keupayaan produk', plan_popular: 'Paling Popular',
    plan_pro_name: 'Pelan Pro Temuduga', plan_pro_desc: 'Sesuai untuk demo lengkap aliran perolehan prospek',
    plan_enterprise_name: 'Pelan Pasukan Temuduga', plan_enterprise_desc: 'Sesuai untuk kolaborasi pasukan dan demo akses lanjutan',
    feature_ai_title: 'Penjanaan Iklan AI', feature_ai_desc: 'Masukkan maklumat produk dan biar AI jana salinan, tajuk, dan CTA berprestasi tinggi untuk pelbagai industri dan bahasa.',
    feature_ai_item_1: 'Penjanaan salinan pintar', feature_ai_item_2: 'Iklan ikut industri', feature_ai_item_3: 'Sokongan pelbagai bahasa',
    feature_asset_title: 'Pengurusan Aset', feature_asset_desc: 'Urus kreatif iklan berkualiti tinggi untuk kecantikan, makanan, renovasi dan lain-lain dengan penggunaan sekali klik dan suntingan tersuai.',
    feature_asset_item_1: 'Iklan mengikut kategori industri', feature_asset_item_2: 'Muat turun sekali klik', feature_asset_item_3: 'Sokongan suntingan tersuai',
    feature_bot_title: 'Sistem Bot', feature_bot_desc: 'Aliran perbualan terbina untuk setiap industri, import ke ManyChat dengan sekali klik dan balasan pelanggan automatik.',
    feature_bot_item_1: 'Aliran perbualan industri', feature_bot_item_2: 'Import ManyChat sekali klik', feature_bot_item_3: 'Susulan prospek automatik',
    feature_analytics_title: 'Analitik', feature_analytics_desc: 'Pantau prestasi iklan masa nyata melalui CTR, kadar penukaran dan metrik utama lain untuk optimasi kempen.',
    feature_analytics_item_1: 'Pemantauan masa nyata', feature_analytics_item_2: 'Analitik pelbagai dimensi', feature_analytics_item_3: 'Laporan perbandingan prestasi',
    feature_integration_title: 'Integrasi Pelbagai Platform', feature_integration_desc: 'Sambung Facebook, Instagram dan saluran utama lain dengan lancar untuk penerbitan sekali klik dan pengurusan berpusat.',
    feature_integration_item_1: 'Sambungan platform utama', feature_integration_item_2: 'Penerbitan iklan sekali klik', feature_integration_item_3: 'Ruang kerja pengurusan berpusat',
    feature_easy_title: 'Mudah Digunakan', feature_easy_desc: 'Antara muka intuitif dengan aliran seret-dan-lepas supaya sesiapa pun boleh lancarkan kempen tanpa kemahiran teknikal.',
    feature_easy_item_1: 'UI intuitif', feature_easy_item_2: 'Reka bentuk seret-dan-lepas', feature_easy_item_3: 'Onboarding pantas',
    plan_period: '/bulan', plan_free_item_1: 'Jana 10 iklan sebulan', plan_free_item_2: 'Akses perpustakaan iklan asas', plan_free_item_3: '1 aliran bot',
    plan_free_item_4: 'Analitik', plan_free_item_5: 'Integrasi pelbagai platform', plan_free_cta: 'Cuba Sekarang',
    plan_pro_item_1: 'Jana 100 iklan sebulan', plan_pro_item_2: 'Akses perpustakaan iklan penuh', plan_pro_item_3: '5 aliran bot',
    plan_pro_item_4: 'Analitik penuh', plan_pro_item_5: 'Integrasi Facebook/Instagram', plan_pro_cta: 'Guna Pelan Demo Pro',
    plan_enterprise_item_1: 'Penjanaan iklan tanpa had', plan_enterprise_item_2: 'Reka bentuk iklan khusus', plan_enterprise_item_3: 'Aliran bot tanpa had',
    plan_enterprise_item_4: 'Analitik lanjutan', plan_enterprise_item_5: 'Integrasi semua platform', plan_enterprise_cta: 'Hubungi Jualan',
    dashboard_overview: 'Gambaran Keseluruhan', dashboard_ad_generate: 'Penjanaan Iklan AI', dashboard_ad_publish: 'Penerbitan Iklan', dashboard_resources: 'Iklan',
    dashboard_bot: 'Sistem Bot', dashboard_analytics: 'Analitik', dashboard_settings: 'Tetapan', dashboard_pro_user: 'Pengguna Pro', dashboard_logout: 'Log Keluar', dashboard_search_placeholder: 'Cari...',
    login_title: 'AdNova - Log masuk', login_back_home: 'Kembali ke Laman Utama', login_slogan: 'Selamat, jelas, dan mudah digunakan seperti platform utama.',
    login_desc: 'Log masuk untuk terus gunakan aset iklan, pelan pelancaran, dan data prospek anda. Untuk keselamatan, guna kata laluan sekurang-kurangnya 8 aksara dan tukar secara berkala.',
    login_welcome: 'Selamat Kembali', login_subtitle: 'Masukkan maklumat akaun anda untuk teruskan dengan AdNova', login_email: 'E-mel', login_password: 'Kata laluan',
    login_forgot: 'Lupa kata laluan?', login_password_placeholder: 'Masukkan kata laluan anda', login_remember: 'Ingat saya (auto log masuk lain kali)',
    login_btn: 'Log masuk', login_loading: 'Sedang log masuk...', login_no_account: 'Belum ada akaun?', login_signup: 'Daftar sekarang', login_msg_missing: 'Sila masukkan e-mel dan kata laluan.', login_msg_success: 'Log masuk berjaya, sedang ke dashboard...',
    register_title: 'AdNova - Daftar', register_back_home: 'Kembali ke Laman Utama', register_slogan: 'Selesaikan pendaftaran dalam 3 langkah dan mula lancarkan kempen sekarang.',
    register_step_1: 'Cipta akaun dan masuk ke dashboard', register_step_2: 'Pilih iklan industri untuk jana iklan dengan cepat', register_step_3: 'Sambung aliran bot untuk susulan automatik',
    register_terms: 'Dengan mendaftar, anda bersetuju dengan Terma Perkhidmatan dan Polisi Privasi AdNova.', register_create: 'Cipta Akaun Anda',
    register_subtitle: 'Mulakan aliran kerja pemasaran AI anda dalam satu minit', register_confirm_password: 'Sahkan Kata Laluan', register_confirm_password_placeholder: 'Masukkan semula kata laluan',
    register_btn: 'Daftar dan Mula', register_loading: 'Sedang mendaftar...', register_has_account: 'Sudah ada akaun?', register_goto_login: 'Pergi log masuk', register_pwd_placeholder: 'Sekurang-kurangnya 6 aksara, huruf dan nombor disyorkan',
    register_msg_need_email: 'Sila masukkan alamat e-mel anda.', register_msg_pwd_short: 'Kata laluan mesti sekurang-kurangnya 6 aksara.', register_msg_pwd_mismatch: 'Kata laluan tidak sepadan.',
    register_msg_auto_login_fail: 'Pendaftaran berjaya tetapi auto log masuk gagal. Sila cuba halaman log masuk.', register_msg_success: 'Pendaftaran berjaya, sedang ke dashboard...',
    workspace_title: 'AdNova - Ruang Kerja Kempen', workspace_back_dashboard: 'Kembali ke Dashboard', workspace_main_title: 'Ruang Kerja Kempen Iklan',
    workspace_main_desc: 'Ini halaman langkah seterusnya. Gaya visual dikekalkan: kad putih, aksen biru, bucu bulat, dan bayang ringan.',
    workspace_step1: 'Langkah 1: Pilih Saluran', workspace_step2: 'Langkah 2: Bajet & Jadual', workspace_budget_placeholder: 'Bajet harian (RM)', workspace_days_placeholder: 'Hari kempen',
    workspace_preview: 'Pratonton Langsung', workspace_channel_unselected: 'Belum dipilih', workspace_label_channel: 'Saluran', workspace_label_budget: 'Bajet', workspace_label_period: 'Tempoh', workspace_days_unit: 'hari', workspace_launch: 'Lancarkan Kempen',
    workspace_from_unknown: 'halaman tidak diketahui', workspace_item_unnamed: 'iklan tanpa nama', workspace_from_text: 'Masuk dari "{from}". Dipilih: {category}{industry}. Sila tetapkan bajet dan lancarkan.', workspace_from_category: ' ({category})', workspace_from_industry: ', industri: {industry}',
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


const ADNOVA_EXTRA_TRANSLATIONS = {
  zh: {
    ad_gen_title: 'AI 广告生成', ad_gen_desc: '填写产品和目标信息，系统将自动生成适合投放的广告文案、标题和行动按钮。',
    ad_gen_guide_title: '填写说明', ad_gen_guide_desc: '信息越完整，生成结果越准确。',
    ad_gen_group_basic: '基础信息', ad_gen_group_product: '产品信息', ad_gen_group_audience: '受众信息', ad_gen_group_delivery: '投放信息',
    ad_gen_label_industry: '行业', ad_gen_label_subcategory: '细分类目', ad_gen_label_business_type: '业务类型', ad_gen_label_brand_name: '品牌名称', ad_gen_label_product_name: '产品 / 服务名称',
    ad_gen_label_price: '价格', ad_gen_label_offer: '优惠内容', ad_gen_label_core_selling: '核心卖点', ad_gen_label_delivery: '交付方式',
    ad_gen_label_age: '目标客户年龄', ad_gen_label_gender: '性别', ad_gen_label_country: '国家 / 地区', ad_gen_label_state: '州 / 省份', ad_gen_label_city: '城市 / 地区', ad_gen_label_region_other: '其他地区（可选）', ad_gen_label_pain: '主要需求 / 痛点',
    ad_gen_label_platform: '投放平台', ad_gen_label_goal: '营销目标', ad_gen_label_tone: '语气风格', ad_gen_label_language: '输出语言',
    ad_gen_ph_subcategory: '例如：美甲、美睫、洗脸', ad_gen_ph_business_type: '例如：到店服务、预约制、套餐销售', ad_gen_ph_brand_name: '请输入品牌名称', ad_gen_ph_product_name: '请输入产品或服务名称',
    ad_gen_ph_price: '例如：RM99', ad_gen_ph_offer: '例如：限时优惠、买一送一、首单折扣', ad_gen_ph_core_selling: '例如：快速见效、适合敏感肌、当天预约', ad_gen_ph_delivery: '例如：到店、上门、线上咨询',
    ad_gen_ph_age: '例如：25–40', ad_gen_ph_pain: '例如：想改善肤质、希望快速咨询', ad_gen_ph_region: '请选择国家 / 地区', ad_gen_ph_state: '请选择地区', ad_gen_ph_city: '请选择城市 / 地区', ad_gen_ph_region_other: '请输入具体州、省或城市',
    ad_gen_help_industry: '用于匹配行业策略与素材建议。', ad_gen_submit: '生成广告', ad_gen_ai_preview: 'AI 生成预览',
    ad_gen_preview_empty: '填写左侧信息后，这里会显示广告生成方向和内容预览。', ad_gen_preview_direction: '当前投放信息', ad_gen_preview_ad_direction: '系统会生成的广告方向', ad_gen_preview_material: '建议使用的素材类型',
    ad_gen_preview_line: '预计输出至 {platform}，以“{goal}”为目标，采用“{tone}”语气（{language}）。',
    ad_gen_history_title: '历史记录', ad_gen_history_empty: '暂无历史记录。请先生成一条广告内容。', ad_gen_history_time: '时间', ad_gen_history_industry: '行业', ad_gen_history_goal: '目标', ad_gen_history_platform: '平台', ad_gen_history_language: '语言', ad_gen_history_status: '状态', ad_gen_history_action: '操作',
    ad_gen_action_view: '查看详情', ad_gen_action_copy: '复制结果', ad_gen_action_regenerate: '重新生成', ad_gen_action_delete: '删除记录', ad_gen_copy_ok: '结果已复制。', ad_gen_delete_ok: '记录已删除。', ad_gen_error_required: '请完成所有必填字段后再生成。',
    ad_gen_opt_select: '请选择', ad_gen_gender_all: '不限', ad_gen_gender_female: '女性', ad_gen_gender_male: '男性',
    ad_gen_goal_dm: '私信', ad_gen_goal_leads: '留资', ad_gen_goal_booking: '预约', ad_gen_goal_order: '下单', ad_gen_goal_store: '到店',
    ad_gen_tone_professional: '专业正式', ad_gen_tone_casual: '轻松口语', ad_gen_tone_promo: '强促销', ad_gen_tone_premium: '高端品牌感',
    ad_gen_country_my: '马来西亚', ad_gen_country_cn: '中国', ad_gen_country_sg: '新加坡', ad_gen_option_other: '其他', ad_gen_city_other: '其他地区', ad_gen_state_all: '全部地区', ad_gen_city_all: '全部地区',
    ad_gen_material_beauty: '建议使用门店环境图、服务前后对比图、顾客体验短视频。', ad_gen_material_food: '建议使用产品特写图、出餐过程视频、门店实拍图。', ad_gen_material_decor: '建议使用施工前后对比图、案例展示图、现场讲解视频。', ad_gen_material_education: '建议使用老师讲解视频、课程海报、学员反馈图。', ad_gen_material_default: '建议使用产品细节图、真实场景图与15秒讲解视频。',
    ad_result_context_rich: '行业：{industry}｜细分类目：{subcategory}｜平台：{platform}｜营销目标：{goal}｜语气：{tone}',
    ad_result_section_headline: '广告标题', ad_result_section_body: '主文案', ad_result_section_cta: 'CTA 按钮文案', ad_result_section_imageSuggestion: '建议图片类型', ad_result_section_videoSuggestion: '建议视频类型', ad_result_section_platformFit: '适合投放的平台', ad_result_section_languageFit: '适合使用的语言版本', ad_result_section_creativeTips: '建议使用的图片 / 视频类型', ad_result_section_whatsapp: 'WhatsApp 首句', ad_result_section_botOpening: 'Bot 开场白', ad_result_section_faq: '常见问题回复建议',
    ad_result_regenerate_item: '单独重生成', ad_result_favorite_item: '标记收藏', ad_result_version_history: '查看版本历史', ad_result_regenerated_suffix: '（已生成新版本）',
    ad_result_default_offer: '限时优惠', ad_result_default_group: '目标人群', ad_result_default_pain: '核心需求', ad_result_cta_default: '立即咨询', ad_result_tip_1: '优先使用明亮干净的主视觉并突出价格与优惠', ad_result_tip_2: '首屏展示品牌、核心卖点与明确行动按钮', ad_result_whatsapp_opening: '你好，我想了解', ad_result_bot_opening: '你好，欢迎咨询', ad_result_faq_q: '常见问题：费用如何计算', ad_result_faq_a: '回复建议：支持方式',
    ad_gen_group_region: '地区信息', ad_gen_label_target_audience: '目标人群', ad_gen_ph_target_audience: '例如：适合25-40岁女性', ad_gen_ph_city_input: '例如：Petaling Jaya', ad_gen_region_hint: '请选择你的主要投放地区（例如：Selangor / Kuala Lumpur）', ad_gen_preview_direction_value: '主打 {platform} 平台，以{goal}为目标，文案风格为{tone}',
    ad_gen_label_country: '国家（固定）', ad_gen_label_state: '州', ad_gen_label_city: '城市（可选）', ad_gen_ph_state: '请选择州',
    ad_gen_ph_product_name: '请输入产品名称', ad_gen_ph_offer: '例如：RM99 限时护理套餐',
    ad_result_section_cta: 'CTA', ad_result_section_imageSuggestion: '图片建议', ad_result_section_videoSuggestion: '视频建议', ad_result_section_shootingSuggestion: '拍摄建议', ad_result_section_platformFit: '适合平台', ad_result_section_audienceFit: '适合人群',
    ad_result_price_prefix: '现价', ad_result_default_product: '产品', ad_result_default_goal: '转化目标', ad_result_shooting_guide: '建议真人出镜，镜头顺序：痛点开场 → 方案展示 → 优惠强化 → CTA收尾。场景优先门店真实环境，搭配产品特写与客户互动镜头。',
    ad_result_context_rich: '行业：{industry}｜平台：{platform}｜营销目标：{goal}｜语气：{tone}'
  },
  en: {
    ad_gen_title: 'AI Ad Generator', ad_gen_desc: 'Fill in product and campaign goals to generate ready-to-run ad copy, headlines, and CTA buttons.', ad_gen_guide_title: 'How to Fill', ad_gen_guide_desc: 'More complete information leads to more accurate output.',
    ad_gen_group_basic: 'Basic Information', ad_gen_group_product: 'Product Information', ad_gen_group_audience: 'Audience Information', ad_gen_group_delivery: 'Campaign Settings',
    ad_gen_label_industry: 'Industry', ad_gen_label_subcategory: 'Subcategory', ad_gen_label_business_type: 'Business Type', ad_gen_label_brand_name: 'Brand Name', ad_gen_label_product_name: 'Product / Service Name', ad_gen_label_price: 'Price', ad_gen_label_offer: 'Offer', ad_gen_label_core_selling: 'Key Selling Point', ad_gen_label_delivery: 'Delivery Method', ad_gen_label_age: 'Target Age', ad_gen_label_gender: 'Gender', ad_gen_label_country: 'Country / Region', ad_gen_label_state: 'State / Province', ad_gen_label_city: 'City / Area', ad_gen_label_region_other: 'Other Region (Optional)', ad_gen_label_pain: 'Main Need / Pain Point', ad_gen_label_platform: 'Platform', ad_gen_label_goal: 'Goal', ad_gen_label_tone: 'Tone', ad_gen_label_language: 'Output Language',
    ad_gen_ph_region: 'Select country / region', ad_gen_ph_state: 'Select a state', ad_gen_ph_city: 'Select city / area', ad_gen_submit: 'Generate Ads', ad_gen_ai_preview: 'Live Preview Card', ad_gen_preview_empty: 'Fill in the form to see strategy and output preview here.', ad_gen_preview_direction: 'Current setup', ad_gen_preview_ad_direction: 'Ad direction', ad_gen_preview_material: 'Recommended creatives', ad_gen_preview_line: 'This ad will be generated for {platform} to drive {goal} with a {tone} tone in {language}.', ad_gen_country_my: 'Malaysia', ad_gen_country_cn: 'China', ad_gen_country_sg: 'Singapore', ad_gen_option_other: 'Other', ad_gen_city_other: 'Other area', ad_gen_state_all: 'All Areas', ad_gen_city_all: 'All Areas', ad_result_section_imageSuggestion: 'Image Suggestions', ad_result_section_videoSuggestion: 'Video Suggestions', ad_result_section_languageFit: 'Recommended Language Version', ad_result_section_platformFit: 'Best-fit Platforms', ad_result_section_creativeTips: 'Creative Direction',
    ad_gen_group_region: 'Region', ad_gen_label_target_audience: 'Target Audience', ad_gen_ph_target_audience: 'e.g. Women aged 25–40', ad_gen_ph_city_input: 'e.g. Petaling Jaya', ad_gen_region_hint: 'Choose your primary delivery area (e.g. Selangor / Kuala Lumpur)', ad_gen_preview_direction_value: 'Focus on {platform}, optimize for {goal}, with a {tone} style',
    ad_gen_label_country: 'Country (Fixed)', ad_gen_label_state: 'State', ad_gen_label_city: 'City (Optional)',
    ad_gen_ph_product_name: 'Enter product name', ad_gen_ph_brand_name: 'Enter brand name (optional)', ad_gen_ph_price: 'e.g. RM99', ad_gen_ph_offer: 'e.g. RM99 limited-time treatment', ad_gen_ph_core_selling: 'e.g. Fast visible results, suitable for sensitive skin',
    ad_result_section_cta: 'CTA', ad_result_section_shootingSuggestion: 'Shooting Suggestions', ad_result_section_audienceFit: 'Best-fit Audience',
    ad_result_price_prefix: 'now at', ad_result_default_product: 'your product', ad_result_default_goal: 'conversion', ad_result_shooting_guide: 'Use real-person footage. Shot order: hook in first 3 seconds → showcase solution → reinforce offer → close with CTA. Film in-store scenes with product close-ups and customer interactions.',
    ad_result_default_offer: 'limited-time offer', ad_result_default_group: 'your target audience', ad_result_default_pain: 'key problem', ad_result_cta_default: 'Message us now', ad_result_whatsapp_opening: 'Hi, I would like to know more about', ad_result_bot_opening: 'Hi, welcome', ad_result_context_rich: 'Industry: {industry} | Platform: {platform} | Goal: {goal} | Tone: {tone}'
  },
  ms: {
    ad_gen_title: 'Penjana Iklan AI', ad_gen_desc: 'Isi maklumat produk dan sasaran untuk jana tajuk iklan, salinan utama, dan CTA yang sedia digunakan.', ad_gen_guide_title: 'Panduan Isi', ad_gen_guide_desc: 'Maklumat yang lebih lengkap menghasilkan cadangan yang lebih tepat.',
    ad_gen_group_basic: 'Maklumat Asas', ad_gen_group_product: 'Maklumat Produk', ad_gen_group_audience: 'Maklumat Audiens', ad_gen_group_delivery: 'Tetapan Kempen',
    ad_gen_label_industry: 'Industri', ad_gen_label_subcategory: 'Subkategori', ad_gen_label_business_type: 'Jenis Perniagaan', ad_gen_label_brand_name: 'Nama Jenama', ad_gen_label_product_name: 'Nama Produk / Servis', ad_gen_label_price: 'Harga', ad_gen_label_offer: 'Promosi', ad_gen_label_core_selling: 'Nilai Teras', ad_gen_label_delivery: 'Cara Penyampaian', ad_gen_label_age: 'Umur Sasaran', ad_gen_label_gender: 'Jantina', ad_gen_label_country: 'Negara / Wilayah', ad_gen_label_state: 'Negeri / Wilayah', ad_gen_label_city: 'Bandar / Kawasan', ad_gen_label_region_other: 'Kawasan Lain (Pilihan)', ad_gen_label_pain: 'Keperluan / Masalah Utama', ad_gen_label_platform: 'Platform Iklan', ad_gen_label_goal: 'Matlamat', ad_gen_label_tone: 'Gaya Bahasa', ad_gen_label_language: 'Bahasa Output',
    ad_gen_ph_region: 'Pilih negara / wilayah', ad_gen_ph_state: 'Pilih negeri', ad_gen_ph_city: 'Pilih bandar / kawasan', ad_gen_submit: 'Jana Iklan', ad_gen_ai_preview: 'Kad Pratonton Langsung', ad_gen_preview_empty: 'Isi borang di kiri untuk lihat arah iklan dan pratonton kandungan.', ad_gen_preview_direction: 'Tetapan semasa', ad_gen_preview_ad_direction: 'Arah iklan', ad_gen_preview_material: 'Cadangan bahan kreatif', ad_gen_country_my: 'Malaysia', ad_gen_country_cn: 'China', ad_gen_country_sg: 'Singapura', ad_gen_option_other: 'Lain-lain', ad_gen_city_other: 'Kawasan lain', ad_gen_state_all: 'Semua Kawasan', ad_gen_city_all: 'Semua Kawasan', ad_result_section_imageSuggestion: 'Cadangan Imej', ad_result_section_videoSuggestion: 'Cadangan Video', ad_result_section_languageFit: 'Versi Bahasa Dicadangkan', ad_result_section_platformFit: 'Platform Sesuai', ad_result_section_creativeTips: 'Arah Kreatif',
    ad_gen_group_region: 'Kawasan', ad_gen_label_target_audience: 'Sasaran Audiens', ad_gen_ph_target_audience: 'Contoh: Wanita umur 25–40', ad_gen_ph_city_input: 'Contoh: Petaling Jaya', ad_gen_region_hint: 'Pilih kawasan utama iklan anda (contoh: Selangor / Kuala Lumpur)', ad_gen_preview_direction_value: 'Fokus di {platform}, matlamat {goal}, gaya {tone}',
    ad_gen_label_country: 'Negara (Tetap)', ad_gen_label_state: 'Negeri', ad_gen_label_city: 'Bandar (Pilihan)',
    ad_gen_ph_product_name: 'Masukkan nama produk', ad_gen_ph_brand_name: 'Masukkan nama jenama (pilihan)', ad_gen_ph_price: 'Contoh: RM99', ad_gen_ph_offer: 'Contoh: Rawatan promosi RM99', ad_gen_ph_core_selling: 'Contoh: Kesan cepat, sesuai untuk kulit sensitif',
    ad_result_section_cta: 'CTA', ad_result_section_shootingSuggestion: 'Cadangan Rakaman', ad_result_section_audienceFit: 'Audiens Sesuai',
    ad_result_price_prefix: 'harga', ad_result_default_product: 'produk anda', ad_result_default_goal: 'konversi', ad_result_shooting_guide: 'Gunakan model sebenar. Urutan rakaman: 3 saat pembukaan menarik → tunjuk penyelesaian → tekankan promosi → tutup dengan CTA. Rakaman di premis sebenar dengan close-up produk dan interaksi pelanggan.',
    ad_result_default_offer: 'promosi masa terhad', ad_result_default_group: 'audiens sasaran', ad_result_default_pain: 'masalah utama', ad_result_cta_default: 'Hubungi sekarang', ad_result_whatsapp_opening: 'Hai, saya nak tahu tentang', ad_result_bot_opening: 'Hai, selamat datang', ad_result_context_rich: 'Industri: {industry} | Platform: {platform} | Matlamat: {goal} | Gaya: {tone}'
  },
  formal: {}
};

Object.keys(ADNOVA_EXTRA_TRANSLATIONS).forEach((lang) => {
  ADNOVA_TRANSLATIONS[lang] = { ...(ADNOVA_TRANSLATIONS[lang] || ADNOVA_TRANSLATIONS.zh), ...ADNOVA_EXTRA_TRANSLATIONS[lang] };
});

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

const ADNOVA_AUTH_KEYS = {
  currentUser: 'adnovaUser',
};

let _supabaseClient = null;

function getSupabaseClient() {
  if (_supabaseClient) return _supabaseClient;

  const supabaseUrl = window.ADNOVA_CONFIG?.supabase?.url;
  const supabaseKey = window.ADNOVA_CONFIG?.supabase?.publishableDefaultKey;
  const createClient = window.supabase?.createClient;

  if (!supabaseUrl || !supabaseKey || !createClient) {
    return null;
  }

  _supabaseClient = createClient(supabaseUrl, supabaseKey);
  return _supabaseClient;
}

function getCurrentUserFromStorage() {
  try {
    const raw = localStorage.getItem(ADNOVA_AUTH_KEYS.currentUser) || sessionStorage.getItem(ADNOVA_AUTH_KEYS.currentUser);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('无法读取登录态。', error);
    return null;
  }
}

function saveCurrentUser(user, persist = true) {
  const data = JSON.stringify(user);
  if (persist) {
    localStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
    sessionStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
    return;
  }

  sessionStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
  localStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
}

function clearCurrentUser() {
  localStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
  sessionStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
}

async function getCurrentUser() {
  const client = getSupabaseClient();
  if (!client) {
    return getCurrentUserFromStorage();
  }

  const { data, error } = await client.auth.getUser();
  if (error || !data?.user) {
    return getCurrentUserFromStorage();
  }

  const profile = {
    id: data.user.id,
    email: data.user.email || '',
    loginAt: new Date().toISOString(),
  };
  saveCurrentUser(profile, true);
  return profile;
}

async function registerUser(email, password) {
  const client = getSupabaseClient();
  if (!client) {
    return { ok: false, message: '认证服务初始化失败，请稍后刷新重试。' };
  }

  const normalizedEmail = String(email || '').trim().toLowerCase();
  const { data, error } = await client.auth.signUp({
    email: normalizedEmail,
    password,
  });

  if (error) {
    return { ok: false, message: error.message || '注册失败，请稍后重试。' };
  }

  const user = data?.user;
  const session = data?.session;

  if (user && session) {
    saveCurrentUser({
      id: user.id,
      email: user.email || normalizedEmail,
      loginAt: new Date().toISOString(),
    }, true);
    return { ok: true, needsEmailConfirm: false };
  }

  return { ok: true, needsEmailConfirm: true };
}

async function loginUser(email, password, persist = true) {
  const client = getSupabaseClient();
  if (!client) {
    return { ok: false, message: '认证服务初始化失败，请稍后刷新重试。' };
  }

  const normalizedEmail = String(email || '').trim().toLowerCase();
  const { data, error } = await client.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error || !data?.user) {
    return { ok: false, message: error?.message || '邮箱或密码不正确，请重试。' };
  }

  saveCurrentUser({
    id: data.user.id,
    email: data.user.email || normalizedEmail,
    loginAt: new Date().toISOString(),
  }, persist);

  return { ok: true };
}

async function logoutUser() {
  const client = getSupabaseClient();
  if (client) {
    await client.auth.signOut();
  }
  clearCurrentUser();
}

async function requireAuth() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    window.location.href = 'login.html';
    return null;
  }

  return currentUser;
}

async function redirectIfAuthenticated() {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    window.location.href = 'dashboard.html';
    return true;
  }

  return false;
}

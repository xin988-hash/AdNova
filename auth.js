const ADNOVA_AUTH_KEYS = {
  users: 'adnovaUsers',
  currentUser: 'adnovaUser',
};

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(ADNOVA_AUTH_KEYS.users);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('无法读取用户数据，已重置。', error);
    return [];
  }
}

function saveRegisteredUsers(users) {
  try {
    localStorage.setItem(ADNOVA_AUTH_KEYS.users, JSON.stringify(users));
    return { ok: true };
  } catch (error) {
    console.error('无法保存用户数据。', error);
    return { ok: false, message: '当前浏览器不允许保存账号信息，请关闭无痕模式后重试。' };
  }
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(ADNOVA_AUTH_KEYS.currentUser) || sessionStorage.getItem(ADNOVA_AUTH_KEYS.currentUser);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn('无法读取登录态。', error);
    return null;
  }
}

function saveCurrentUser(user, persist = true) {
  try {
    const data = JSON.stringify(user);
    if (persist) {
      localStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
      sessionStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
      return { ok: true };
    }

    sessionStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
    localStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
    return { ok: true };
  } catch (error) {
    console.error('无法保存登录态。', error);
    return { ok: false, message: '浏览器拦截了登录状态保存，请检查隐私设置。' };
  }
}

function registerUser(email, password) {
  const normalizedEmail = normalizeEmail(email);

  if (!isValidEmail(normalizedEmail)) {
    return { ok: false, message: '请输入有效的邮箱地址。' };
  }

  if (String(password || '').length < 6) {
    return { ok: false, message: '密码至少需要 6 位。' };
  }

  const users = getRegisteredUsers();
  const exists = users.some((user) => user.email === normalizedEmail);

  if (exists) {
    return { ok: false, message: '该邮箱已注册，请直接登录。' };
  }

  users.push({
    email: normalizedEmail,
    password,
    createdAt: new Date().toISOString(),
  });

  const saveResult = saveRegisteredUsers(users);
  if (!saveResult.ok) {
    return saveResult;
  }

  return { ok: true };
}

function loginUser(email, password, persist = true) {
  const normalizedEmail = normalizeEmail(email);
  const users = getRegisteredUsers();
  const matchedUser = users.find((user) => user.email === normalizedEmail && user.password === password);

  if (!matchedUser) {
    return { ok: false, message: '邮箱或密码不正确，请重试。' };
  }

  const saveResult = saveCurrentUser({
    email: matchedUser.email,
    loginAt: new Date().toISOString(),
  }, persist);

  if (!saveResult.ok) {
    return saveResult;
  }

  return { ok: true };
}

function logoutUser() {
  localStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
  sessionStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
}

function requireAuth() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    window.location.href = 'login.html';
    return null;
  }

  return currentUser;
}

function redirectIfAuthenticated() {
  if (getCurrentUser()) {
    window.location.href = 'dashboard.html';
    return true;
  }

  return false;
}

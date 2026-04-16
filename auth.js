const ADNOVA_AUTH_KEYS = {
  users: 'adnovaUsers',
  currentUser: 'adnovaUser',
};

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
  localStorage.setItem(ADNOVA_AUTH_KEYS.users, JSON.stringify(users));
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
  const data = JSON.stringify(user);
  if (persist) {
    localStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
    sessionStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
    return;
  }

  sessionStorage.setItem(ADNOVA_AUTH_KEYS.currentUser, data);
  localStorage.removeItem(ADNOVA_AUTH_KEYS.currentUser);
}

function registerUser(email, password) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
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

  saveRegisteredUsers(users);
  return { ok: true };
}

function loginUser(email, password, persist = true) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const users = getRegisteredUsers();
  const matchedUser = users.find((user) => user.email === normalizedEmail && user.password === password);

  if (!matchedUser) {
    return { ok: false, message: '邮箱或密码不正确，请重试。' };
  }

  saveCurrentUser({
    email: matchedUser.email,
    loginAt: new Date().toISOString(),
  }, persist);

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

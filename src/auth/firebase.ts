export const firebase = {
  isAuthenticated: () => false,
  getCurrentUser: () => null,
  register: () => { },
  login: () => {
    localStorage.setItem('user', JSON.stringify({ name: 'bob' }));
  },
  logout: () => { },
};

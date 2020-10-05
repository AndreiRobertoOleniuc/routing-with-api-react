const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb, name, vorname) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default fakeAuth;

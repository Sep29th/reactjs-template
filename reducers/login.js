export const handleLogin = (state = { isLogin: false }, actions) => {
  switch (actions.type) {
    case "LOGIN":
      var date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toUTCString();
      document.cookie = "token=" + actions.info.token + expires;
      return {
        isLogin: true,
        userInfo: actions.info,
      };
    case "LOGOUT":
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};

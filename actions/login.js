export function login(info) {
  return {
    type: "LOGIN",
    info: info,
  };
}
export function logout() {
  return {
    type: "LOGOUT",
  };
}

function genJwt() {
  let token = localStorage.getItem("token");
  return `Bearer ${token}`;
}

export { genJwt };

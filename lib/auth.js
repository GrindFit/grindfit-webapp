export const isAuth = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("gf_token");
};

export const requireAuth = () => {
  if (!isAuth()) {
    window.location.href = "/login";
    return false;
  }
  return true;
};

export const login = (code = "member") => {
  localStorage.setItem("gf_token", code);
  window.location.href = "/app"; // or wherever your dashboard route is
};

export const logout = () => {
  localStorage.removeItem("gf_token");
  localStorage.removeItem("grindfit_profile");
  localStorage.removeItem("grindfit_plan");
  window.location.href = "/";
};

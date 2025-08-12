// lib/auth.js
export const isAuthed = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("gf_token");
};

export const requireAuth = () => {
  if (!isAuthed()) {
    window.location.href = "/login";
    return false;
  }
  return true;
};

export const login = (who="member") => {
  localStorage.setItem("gf_token", who);
};
export const logout = () => {
  localStorage.removeItem("gf_token");
  localStorage.removeItem("grindfit_profile");
  localStorage.removeItem("grindfit_plan");
  window.location.href = "/";
};

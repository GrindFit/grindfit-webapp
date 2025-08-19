// lib/auth.js
export function login(profile) {
  try {
    const p = { name: profile.name?.trim() || "Member", email: profile.email || "" };
    localStorage.setItem("grindfit_profile", JSON.stringify(p));
    localStorage.setItem("grindfit_isAuthed", "1");
    return true;
  } catch {
    return false;
  }
}

export function logout() {
  localStorage.removeItem("grindfit_profile");
  localStorage.removeItem("grindfit_isAuthed");
  // keep any plan you already store if you want; otherwise clear it too
  // localStorage.removeItem("grindfit_plan");
  window.location.href = "/";
}

export function requireAuth() {
  try {
    const ok = localStorage.getItem("grindfit_isAuthed") === "1" &&
               !!localStorage.getItem("grindfit_profile");
    if (!ok) {
      if (typeof window !== "undefined") window.location.href = "/login";
      return false;
    }
    return true;
  } catch {
    if (typeof window !== "undefined") window.location.href = "/login";
    return false;
  }
}

export function getProfile() {
  try {
    const raw = localStorage.getItem("grindfit_profile");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

// lib/data.js
// Small helpers that load JSON from /public/assets/data at runtime.
// This keeps the build happy and lets us evolve the shape later
// (we'll switch to static imports once we freeze the CSV → JSON).

export async function loadMeals() {
  const res = await fetch('/assets/data/meals.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load meals.json');
  return res.json();
}

export async function loadWorkouts() {
  const res = await fetch('/assets/data/workouts.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load workouts.json');
  return res.json();
}

// Convenience filter: return ONLY Mon–Fri from week 1
export async function loadWeekOneMonFri() {
  const all = await loadWorkouts();
  // Adjust keys if yours differ (day, week, etc.)
  const weekdays = new Set(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  return all.filter(w => (w.week === 1 || w.Week === 1) && weekdays.has(w.day || w.Day));
}

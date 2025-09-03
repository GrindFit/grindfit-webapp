// components/CommandCenter.jsx
export default function CommandCenter() {
  return (
    <section id="dashboard" className="mt-20">
      <h2 className="gf-section-title text-3xl sm:text-4xl">
        Your Fitness <span className="gf-gradient-text">Command Center</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Left: Today’s Progress */}
        <div className="cc-card">
          <p className="text-sm mb-3 opacity-80">Today’s Progress</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs opacity-70 mb-1">
                <span>Steps</span><span>85%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                <div className="cc-bar cc-bar--orange h-2 w-[85%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs opacity-70 mb-1">
                <span>Water Intake</span><span>73%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                <div className="cc-bar cc-bar--green h-2 w-[73%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs opacity-70 mb-1">
                <span>Calories</span><span>66%</span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                <div className="cc-bar cc-bar--orange h-2 w-[66%]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="cc-card">
              <p className="text-xs opacity-70">Workouts</p>
              <p className="text-2xl font-bold mt-1">45</p>
            </div>
            <div className="cc-card">
              <p className="text-xs opacity-70">lbs Lost</p>
              <p className="text-2xl font-bold mt-1">-12</p>
            </div>
          </div>
        </div>

        {/* Middle: This Week’s Plan */}
        <div className="cc-card">
          <p className="text-sm mb-3 opacity-80">This Week’s Plan</p>
          <ul className="space-y-3 text-sm">
            {[
              ['Monday',    'Push Day – Chest & Triceps',  '45 min'],
              ['Tuesday',   'Pull Day – Back & Biceps',    '50 min'],
              ['Wednesday', 'Leg Day – Quads & Glutes',    '60 min'],
              ['Thursday',  'Cardio & Core',               '30 min'],
              ['Friday',    'Full Body HIIT',              '40 min'],
            ].map(([day, what, time]) => (
              <li key={day} className="flex items-center gap-3">
                <div className="gf-icon gf-icon--green text-white/90 text-xs w-7 h-7 rounded-md flex items-center justify-center">
                  {time.replace(' min','')}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{day}</p>
                  <p className="text-xs opacity-70">{what}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Nutrition Goals */}
        <div className="cc-card">
          <p className="text-sm mb-3 opacity-80">Nutrition Goals</p>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-4xl font-extrabold">2,156</p>
            <p className="text-xs opacity-70 -mt-1 mb-4">calories remaining</p>

            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ['Protein','120g'],
                ['Carbs','280g'],
                ['Fat','75g'],
              ].map(([k, v]) => (
                <div key={k} className="cc-card">
                  <p className="text-xs opacity-70">{k}</p>
                  <p className="font-bold mt-1">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="gf-cta mt-5 w-full">Start Workout</button>
        </div>
      </div>
    </section>
  );
}

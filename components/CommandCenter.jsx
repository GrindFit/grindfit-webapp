// components/CommandCenter.jsx
import { Activity, CalendarClock, Scale, Play } from "lucide-react";

export default function CommandCenter() {
  return (
    <section id="command-center" className="gf-section">
      <div className="gf-section-lead">
        <h2>
          Your Fitness <span className="gf-orange-grad-text">Command Center</span>
        </h2>
        <p>
          Experience the dashboard that will guide you to your goals. Track
          everything that matters in one beautiful interface.
        </p>
      </div>

      <div className="gf-cc-grid">
        {/* Progress */}
        <div className="gf-card">
          <h3>Today’s Progress</h3>
          <div className="gf-metrics">
            <div className="gf-metric">
              <span>Steps</span>
              <div className="gf-bar gf-bar-orange" style={{ "--val": "67%" }} />
              <span className="gf-num">6,700 / 10,000</span>
            </div>

            <div className="gf-metric">
              <span>Water</span>
              <div className="gf-bar gf-bar-green" style={{ "--val": "50%" }} />
              <span className="gf-num">2 L / 4 L</span>
            </div>

            <div className="gf-metric">
              <span>Calories</span>
              <div className="gf-bar gf-bar-orange" style={{ "--val": "78%" }} />
              <span className="gf-num">1,950 / 2,500</span>
            </div>

            <div className="gf-metric">
              <span>Weight</span>
              <div className="gf-bar gf-bar-green" style={{ "--val": "100%" }} />
              <span className="gf-num">72 kg</span>
            </div>
          </div>

          <div className="gf-pills">
            <div className="gf-pill gf-pill-orange">
              <Activity size={16} />
              <span>45</span>
              <small>Workouts</small>
            </div>
            <div className="gf-pill gf-pill-green">
              <Scale size={16} />
              <span>-12</span>
              <small>kg lost</small>
            </div>
          </div>
        </div>

        {/* Week plan */}
        <div className="gf-card">
          <h3>This Week’s Plan</h3>
          <ul className="gf-week">
            <li><strong>Monday</strong><span>Push Day — Chest & Triceps</span></li>
            <li><strong>Tuesday</strong><span>Pull Day — Back & Biceps</span></li>
            <li><strong>Wednesday</strong><span>Leg Day — Quads & Glutes</span></li>
            <li><strong>Thursday</strong><span>Cardio & Core</span></li>
            <li><strong>Friday</strong><span>Full Body HIIT</span></li>
          </ul>
        </div>

        {/* Nutrition */}
        <div className="gf-card">
          <h3>Nutrition Goals</h3>

          {/* Big number with macros INSIDE this box */}
          <div className="gf-calorie-box">
            <div className="gf-cal-number">2,156</div>
            <div className="gf-macros">
              <div className="gf-macro">
                <span className="gf-micro">Protein</span>
                <strong>120g</strong>
              </div>
              <div className="gf-macro">
                <span className="gf-micro">Carbs</span>
                <strong>280g</strong>
              </div>
              <div className="gf-macro">
                <span className="gf-micro">Fat</span>
                <strong>75g</strong>
              </div>
            </div>
          </div>

          <button className="gf-cta-wide">
            <Play size={16} />
            Start Workout
          </button>
        </div>
      </div>
    </section>
  );
}

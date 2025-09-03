// components/Plans.jsx
import { CheckCircle, Crown } from "lucide-react";

const tiers = [
  {
    name: "1 Month",
    price: 19,
    features: [
      "Basic workout plans",
      "Nutrition tracking",
      "Daily metrics logging",
      "Mobile app access",
      "Community support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "3 Months",
    price: 39,
    popular: true, // center-left featured
    features: [
      "Everything in 1 Month",
      "AI-progressive programming",
      "Personalized meal planning",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "6 Months",
    price: 59,
    features: [
      "Everything in 3 Months",
      "1-on-1 personal coaching",
      "Custom workout design",
      "Advanced biometrics",
      "Nutrition consultations",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "12 Months",
    price: 79,
    features: [
      "All Elite features",
      "Exclusive live workshops",
      "Elite community access",
      "Goal setting sprints",
      "Priority new features",
    ],
    cta: "Start Free Trial",
  },
];

export default function Plans() {
  return (
    <section className="relative pb-20 pt-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-white">
          Choose Your <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] bg-clip-text text-transparent">Transformation Plan</span>
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border bg-black/30 backdrop-blur-sm p-6 transition
                         border-white/5 ${t.popular ? "ring-2 ring-[#FFA24A]/60" : ""}`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] px-3 py-1 text-[11px] font-bold text-black shadow-lg inline-flex items-center gap-1">
                  <Crown size={14} /> Most Popular
                </div>
              )}

              <div className="mt-2 text-sm uppercase tracking-wide text-white/60">{t.name}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <div className="text-3xl font-black text-white">${t.price}</div>
                <div className="text-xs text-white/50">/month</div>
              </div>

              <ul className="mt-4 space-y-2">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                    <CheckCircle size={16} className="mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold text-black
                           bg-gradient-to-r from-[#FF7A18] to-[#FFA24A] hover:brightness-105 transition"
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

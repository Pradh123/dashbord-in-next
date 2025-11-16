import { TrendingUp, TrendingDown } from "lucide-react";
import { useState, useRef } from "react";

export default function StatCard({ title, value, change, up, id }) {
  const bgColor = id % 2 === 0 ? "bg-[#E6F1FD]" : "bg-[#EDEEFC]";

  const originalDigits = value.toString().split("");
  const [digits, setDigits] = useState(originalDigits);

  const animRefs = useRef({});

  const safeParse = (d) => {
    const n = parseInt(d);
    return Number.isFinite(n) ? n : null;
  };

  // animate single digit
  const animateDigit = (index, from, to, duration = 450) => {
    const fromNum = safeParse(from);
    const toNum = safeParse(to);

    if (fromNum === null || toNum === null) return; // skip comma

    if (animRefs.current[index]) cancelAnimationFrame(animRefs.current[index]);

    const start = performance.now();

    const frame = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const current = Math.floor(fromNum + (toNum - fromNum) * progress);

      setDigits((prev) => {
        const updated = [...prev];
        updated[index] = current.toString();
        return updated;
      });

      if (progress < 1) {
        animRefs.current[index] = requestAnimationFrame(frame);
      }
    };

    animRefs.current[index] = requestAnimationFrame(frame);
  };

  // hover → decrease → go down (+7px)
  const handleDigitEnter = (index) => {
    if (safeParse(digits[index]) === null) return;
    animateDigit(index, digits[index], "0");
  };

  // leave → increase → go up (-7px)
  const handleDigitLeave = (index) => {
    if (safeParse(digits[index]) === null) return;
    animateDigit(index, digits[index], originalDigits[index]);
  };

  return (
    <div className={`${bgColor} px-5 py-4 rounded-2xl shadow-sm relative`}>
      <h3 className="text-sm text-gray-500 hover:translate-x-1 transition-all duration-700 ease-out">{title}</h3>

      <div className="flex py-3 gap-6 items-center">
        
        {/* DIGITS WITH UP/DOWN MOTION */}
        <div className="text-[20px] font-semibold tracking-tight flex gap-[2px] select-none">
          {digits.map((d, i) => {
            const isDigit = safeParse(d) !== null;

            return (
              <span
                key={i}
                className="relative inline-block w-3 text-center cursor-pointer overflow-hidden"
                onMouseEnter={() => handleDigitEnter(i)}
                onMouseLeave={() => handleDigitLeave(i)}
              >
                <span
                  className="block transition-transform duration-300 ease-out mt-4"
                  style={{
                    transform: isDigit
                      ? originalDigits[i] !== d
                        ? "translateY(7px)"  // when decreasing
                        : "translateY(-7px)" // when increasing
                      : "translateY(0px)",    // comma stays fixed
                    color: isDigit ? "inherit" : "#555",
                  }}
                >
                  {d}
                </span>
              </span>
            );
          })}
        </div>

        {/* Change + Icon */}
        <div className="flex items-center gap-1">
          <span className={`${up ? "text-green-600" : "text-red-600"} text-[12px]`}>
            {change}
          </span>

          {up ? (
            <TrendingUp className="w-3 h-3 text-green-600" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-600" />
          )}
        </div>

      </div>
    </div>
  );
}

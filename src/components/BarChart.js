export default function TrafficSources() {
  const sources = [
    { name: "Google", bars: ["w-3", "w-2.5", "w-2"] },
    { name: "YouTube", bars: ["w-4", "w-3", "w-2.5"] },
    { name: "Instagram", bars: ["w-3.5", "w-3", "w-2"] },
    { name: "Pinterest", bars: ["w-6", "w-4", "w-3"] }, // longest
    { name: "Facebook", bars: ["w-3", "w-2.5", "w-2"] },
    { name: "Twitter", bars: ["w-3.5", "w-3", "w-2.5"] },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-50 transition-all duration-300">
      <h3 className="font-semibold text-[14px] mb-5">Traffic by Website</h3>

      <ul className="space-y-5">
        {sources.map((s) => (
          <li
            key={s.name}
            className="flex items-center justify-between group 
                       transition-all duration-300
                       hover:translate-x-[4px]"
          >
            {/* Website Name */}
            <span className="text-[12px] transition-all duration-300 group-hover:font-semibold">
              {s.name}
            </span>

            {/* Variable sized bars */}
            <div className="flex items-center gap-[4px]">
              <span className={`${s.bars[0]} h-[3px] rounded-full bg-black`}></span>
              <span className={`${s.bars[1]} h-[3px] rounded-full bg-gray-400`}></span>
              <span className={`${s.bars[2]} h-[3px] rounded-full bg-gray-200`}></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

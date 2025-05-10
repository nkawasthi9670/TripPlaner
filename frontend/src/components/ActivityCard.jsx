

const days = [
  { day: "MON", date: "27", month: "JAN", active: true },
  { day: "TUE", date: "28" },
  { day: "WED", date: "29" },
  { day: "THU", date: "30" },
  { day: "FRI", date: "31" },
  { day: "SAT", date: "1", month: "FEB" },
];

const ActivityCard = ({ mode }) => {
  const isDark = mode === "dark";

  return (
    <div>
     <div className="flex justify-between items-center">
       <span className="text-base font-semibold pl-7">Activities</span>
       <a
          href="#"
          className={`text-sm underline pr-7 ${
          isDark ? "text-lime-400" : "text-blue-500"
       }`}
       >
        See all
      </a>
     </div>
    <div
      className={`rounded-3xl p-4 m-4 flex flex-col gap-3 max-w-full overflow-x-auto ${
        isDark ? "bg-[#2c2c2c] text-white" : "bg-white text-black border"
      }`}
    >
      <div className="flex justify-between items-center">
        
        <div className="flex gap-2">
          
          <span
            className={`font-semibold text-sm rounded-xl px-3 py-1 ${
              isDark ? "bg-lime-400 text-black" : "bg-blue-500 text-white"
            }`}
          >
            Day Plan
          </span>
          <span
            className={`font-semibold text-sm rounded-xl px-3 py-1 border ${
              isDark
                ? "border-lime-400 text-lime-400"
                : "border-blue-500 text-blue-500"
            }`}
          >
            14 Activities
          </span>
        </div>
       
      </div>

      <div className="flex gap-2 overflow-x-auto pt-2">
        {days.map((d, idx) => {
          const activeStyles = isDark
            ? "bg-lime-400 border-lime-400 text-black"
            : "bg-blue-500 border-blue-500 text-white";
          const inactiveStyles = isDark
            ? "bg-[#3a3a3a] border-white/20 text-white"
            : "bg-gray-100 border-black/10 text-black";

          return (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center min-w-[56px] rounded-xl p-1 text-center border ${
                d.active ? activeStyles : inactiveStyles
              } ${d.month ? "pr-1" : ""}`}
            >
              {d.month && !d.active && (
                <span
                  className={`text-[10px] font-medium -mb-1 ${
                    isDark ? "text-white/70" : "text-black/50"
                  }`}
                >
                  {d.month}
                </span>
              )}
              <span
                className={`text-[12px] font-medium ${
                  d.active
                    ? isDark
                      ? "text-black"
                      : "text-white"
                    : isDark
                    ? "text-white/70"
                    : "text-black/50"
                }`}
              >
                {d.day}
              </span>
              <span className="text-lg font-bold">{d.date}</span>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default ActivityCard;

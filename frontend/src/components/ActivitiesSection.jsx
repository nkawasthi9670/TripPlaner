

const activities = [
  {
    title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
    time: "8:15 am Morning",
    duration: "3 hours",
    pickup: "From Hotel",
    image: "sensoji.jpg",
  },
  {
    title: "Tokyo Sky Tree",
    time: "1:00 pm Afternoon",
    duration: "3 hours",
    pickup: "From Nakamise Street",
    image: "skytree.jpg",
  },
  {
    title: "Kimono Wearing",
    time: "Anytime before 8:00pm",
    duration: "1-2 hours",
    pickup: "From Hotel",
    image: "kimono.jpg",
  },
];

const ActivitiesSection = ({ mode }) => {
  const isDark = mode === "dark";

  return (
    <div
      className={`flex flex-col gap-4 m-4 rounded-xl p-3 pb-16 mt-4 ${
        isDark ? " text-white" : " text-black "
      }`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center gap-4">
        <div
          className={`text-sm font-semibold rounded-xl px-2 py-1 ${
            isDark ? "bg-lime-400 text-black" : "bg-blue-500 text-white"
          }`}
        >
          <span>Day 1</span>
          <span className="ml-4">27.01.2025</span>
        </div>
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isDark ? "text-lime-400" : "text-blue-600"
          }`}
        >
          🚶‍♂️ 3 Activities
        </span>
      </div>

      {/* Activity Cards */}
      <div
        className={`p-4 rounded-2xl flex flex-col gap-4 ${
          isDark ? "border border-yellow-400" : "border border-blue-400 bg-white"
        }`}
      >
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden flex flex-row ${
              isDark ? "bg-[#3a3a3a]" : "bg-gray-100"
            }`}
          >
            {/* Image */}
            <div className="w-2/5">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-3/5 p-4 flex flex-col justify-center">
              <h3
                className={`font-semibold text-lg mb-2 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {activity.title}
              </h3>
              <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
                <strong>Timing:</strong> {activity.time}
              </p>
              <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
                <strong>Duration:</strong> {activity.duration}
              </p>
              <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
                <strong>Pick up:</strong> {activity.pickup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;

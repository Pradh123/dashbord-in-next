export default function ActivityItem() {
  const activities = [
    {
      id: 1,
      gradient: true,
      avatar: "from-purple-500 to-pink-500",
      title: "Changed the style.",
      time: "Just now",
    },
    {
      id: 2,
      gradient: false,
      avatar: "bg-orange-500",
      title: "Released a new version.",
      time: "59 minutes ago",
    },
    {
      id: 3,
      gradient: false,
      avatar: "bg-blue-500",
      title: "Submitted a bug.",
      time: "12 hours ago",
    },
    {
      id: 4,
      gradient: false,
      avatar: "bg-green-500",
      title: "Modified A data in Page X.",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      gradient: false,
      avatar: "bg-red-500",
      title: "Deleted a page in Project X.",
      time: "Feb 2, 2025",
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4 pb-2">
        <h2 className="text-md font-semibold text-gray-900">Activities</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 thin-scrollbar">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex gap-3 relative group">

            {/* Vertical Line */}
            {index < activities.length - 1 && (
              <div className="absolute left-[12px] top-8 bottom-0 w-px bg-gray-200"></div>
            )}

            {/* Avatar */}
            <div className="flex-shrink-0 relative z-10">
              <div
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center text-white font-medium text-xs
                  transition-all duration-300 ease-out
                  group-hover:scale-110 
                  ${activity.gradient ? "bg-gradient-to-br " + activity.avatar : activity.avatar}
                `}
              >
                {!activity.gradient && activity.title.charAt(0)}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-2 group-hover:translate-x-1 transition-all duration-700 ease-out">
              <p className="text-sm font-medium  text-gray-900 group-hover:text-blue-600 transition-colors">
                {activity.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 ">{activity.time}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

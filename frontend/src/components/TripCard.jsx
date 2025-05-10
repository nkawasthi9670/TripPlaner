
import { FaRegClock } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";


const TripCard = ({ location, duration, travelGroup, activitiesCount = 14 }) => {
  
  return (
    <div className="mt-4 relative m-4 rounded-2xl overflow-hidden h-64">
        {/* Background Image */}
        <img
          src="Tokyo.jpg" // Replace with actual image URL
          alt={location || "Trip Location"}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 p-4 bg-black bg-opacity-50 h-full text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold">{location || 'Default Location'}</h3>
            <p className="text-gray-300">27.01.2025 - 02.02.2025</p>
          </div>

          <div className="flex justify-between mt-4 flex-wrap gap-2 text-sm md:text-base">
            <div className="flex items-center">
              <FaRegClock />
              <span className="ml-1">{duration || 'N/A'}</span>
            </div>
            <div className="flex items-center">
              <FaUserFriends />
              <span className="ml-1">{travelGroup || 'Group Info'}</span>
            </div>
            <div className="flex items-center">
            <LuNotebook />
              <span className="ml-1">{activitiesCount} Activities</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TripCard;

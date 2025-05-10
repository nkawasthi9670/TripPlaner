
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const hotels = [
  {
    name: 'Shinagawa Prince Hotel',
    checkIn: '26.01.2025, 11:15 pm',
    checkOut: '28.01.2025, 11:15 am',
    nights: 2,
    status: 'Confirmed',
    statusIcon: <FaCheckCircle className="text-green-400" />,
    rating: '4.0 Very Good',
    image: 'sensoji.jpg',
  },
  {
    name: 'Mercure Hotel',
    checkIn: '28.01.2025, 6:00 pm',
    checkOut: '30.01.2025, 11:15 am',
    nights: 2,
    status: 'Pending',
    statusIcon: <FaClock className="text-yellow-400" />,
    rating: '4.1 Very Good',
    image: 'hotel1.webp',
  },
  {
    name: 'Hilton Shibuya',
    checkIn: '30.01.2025, 2:00 pm',
    checkOut: '01.02.2025, 11:00 am',
    nights: 2,
    status: 'Confirmed',
    statusIcon: <FaCheckCircle className="text-green-400" />,
    rating: '4.3 Excellent',
    image: 'hotel2.webp',
  },
  {
    name: 'Hilton ',
    checkIn: '30.01.2025, 2:00 pm',
    checkOut: '01.02.2025, 11:00 am',
    nights: 2,
    status: 'Confirmed',
    statusIcon: <FaCheckCircle className="text-green-400" />,
    rating: '4.3 Excellent',
    image: 'hotel3.webp',
  },
];

const AccommodationSection = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <div
      className={`px-4 py-6 ${
        isDark ? ' text-white' : ' text-black'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Accommodation</h2>
        <button
          className={`text-sm font-semibold ${
            isDark ? 'text-lime-400' : 'text-blue-500'
          }`}
        >
          See all
        </button>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {hotels.map((hotel, idx) => (
          <div
            key={idx}
            className={`min-w-[260px] max-w-sm rounded-2xl overflow-hidden shadow-md ${
              isDark ? 'bg-[#1c1c1e] text-white' : 'bg-white text-black border border-gray-200'
            }`}
          >
            <div className="relative">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-36 w-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-blue-600 text-xs px-2 py-1 rounded text-white font-semibold">
                ⭐ {hotel.rating}
              </div>
            </div>
            <div className="p-4 text-sm">
              <h3 className="text-base font-semibold mb-2">{hotel.name}</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Check in:</span> {hotel.checkIn}
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Check out:</span> {hotel.checkOut}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{hotel.nights} Nights</span>
                <span className={`flex items-center gap-1 text-sm font-medium `}>
                  {hotel.statusIcon}
                  {hotel.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationSection;

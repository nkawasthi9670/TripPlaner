
const FlightDetails = ({location}) => {
  return (
    <div className="bg-blue-600 rounded-3xl p-8 m-4 flex flex-col gap-3 text-white  max-w-full overflow-x-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-lg md:text-xl font-semibold">Flight Details</h2>
        <div className="flex flex-col items-end">
          <button className="text-sm text-lime-400 underline">See all</button>
        </div>
      </div>
        <p className="text-xs">26.01.2025, 10:50 AM</p>

      {/* Flight Info */}
      <div className="mt-4 md:flex md:justify-between md:items-center">
        <div>
          <p className="text-base font-bold">DEL ➝ {location || 'N\A'}</p>
          <p className="text-xs text-gray-200">Delhi, India ➝ {location || 'N\A'}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

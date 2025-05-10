

const Header = ({ mode }) => {
  const userName = 'Chhavi';
  const initial = userName.charAt(0).toUpperCase();

  const isDark = mode === 'dark';

  return (
    <div
      className={`${
        isDark ? 'bg-gray-900 text-white' : ' text-black'
      } p-6 rounded-lg w-full max-w-md md:max-w-3xl mx-auto flex justify-between items-center`}
    >
      <div>
        <h1 className="text-2xl font-bold">Hello {userName}!</h1>
        <p className="mt-1">Ready for the trip?</p>
        <h2 className="mt-4 text-lg font-semibold">Your Upcoming Trip</h2>
      </div>

      {/* Profile Icon with Initial */}
      <div
        className={`${
          isDark ? 'bg-red-500' : 'bg-red-500 text-white'
        } cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-2xl  shadow-md mb-10`}
      >
        {initial}
      </div>
    </div>
  );
};

export default Header;

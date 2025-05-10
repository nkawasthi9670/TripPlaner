import { AiFillHome, AiOutlineSearch, AiOutlinePlus, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

export default function Footer({ mode }) {
  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-3 md:hidden 
      ${mode === 'dark' ? 'bg-[#1e1e1e] text-white' : 'bg-white text-blue-800'}`}>
      <button className={`p-2 rounded-full ${mode === 'dark' ? 'text-lime-400 bg-lime-900/50' : 'text-white bg-blue-600/50'}`}>
        <AiFillHome size={24} />
      </button>
      <button className={`hover:text-lime-400 hover:bg-lime-900/50 rounded-full p-2 ${mode === 'dark' ? 'text-gray-400' : 'hover:bg-blue-300 hover:text-white text-gray-500'}`}>
        <AiOutlineSearch size={24} />
      </button>
      <button className={`p-2 rounded-full ${mode === 'dark' ? 'text-lime-400' : 'text-blue-500'}`}>
        <AiOutlinePlus size={24} />
      </button>
      <button className={`hover:text-lime-400 hover:bg-lime-900/50 rounded-full p-2 ${mode === 'dark' ? 'text-gray-400' : 'hover:bg-blue-300 hover:text-white text-gray-500'}`}>
        <AiOutlineHeart size={24} />
      </button>
      <button className={`hover:text-lime-400 hover:bg-lime-900/50 rounded-full p-2 ${mode === 'dark' ? 'text-gray-400' : 'hover:bg-blue-300 hover:text-white text-gray-500'}`}>
        <AiOutlineUser size={24} />
      </button>
    </nav>
  );
}

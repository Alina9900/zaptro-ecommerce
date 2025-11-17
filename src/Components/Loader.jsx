const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0b0b0b]">
      <div className="relative">
        <div className="
          w-20 h-20 rounded-full border-4 border-transparent
          border-t-purple-500 animate-spin
        "></div>

        <div className="
          absolute inset-2 w-16 h-16 rounded-full border-4
          border-transparent border-t-cyan-400 animate-spin
          [animation-duration:1.5s]
        "></div>

        <p className="text-gray-300 mt-6 text-center tracking-wider">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;

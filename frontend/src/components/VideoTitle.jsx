export default function VideoTitle({ title, overview }) {
  return (
    <div className="absolute text-white pt-[18%] p-12 z-10 top-0 left-0 w-full lg:pl-40">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-300 mb-6 w-1/3">{overview.slice(0, 120)}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-red-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
          </svg>
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 transition-colors duration-200 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          Watch More
        </button>
      </div>
    </div>
  );
}

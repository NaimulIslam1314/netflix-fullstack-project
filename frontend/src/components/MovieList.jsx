import React, { useRef } from "react";
import MoveiCard from "./MoveiCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MovieList({ title, movies = [], searchMovie = false }) {
  const scrollRef = useRef(null);

  // Custom smooth scroll animation
  const animateScroll = (direction) => {
    const element = scrollRef.current;
    if (!element) return;
    const scrollAmount = 300; // total distance to scroll
    const duration = 700; // ms, increase for slower scroll
    const start = element.scrollLeft;
    const end =
      direction === "left" ? start - scrollAmount : start + scrollAmount;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeInOutQuad for smoothness
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      element.scrollLeft = start + (end - start) * ease;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className="mb-10 px-4 min-w-0">
      <h2
        className={`text-2xl md:text-3xl ${
          searchMovie ? "font-extrabold text-black" : "text-white"
        } mb-6 tracking-wide drop-shadow-lg`}
      >
        {searchMovie ? "Search Results" : `${title}`}
      </h2>
      <div className="relative min-w-0">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-lg"
          style={{ pointerEvents: "auto" }}
          onClick={() => animateScroll("left")}
        >
          <FaChevronLeft size={24} />
        </button>
        {/* Movie List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto py-2 min-w-0 w-full no-scrollbar scroll-smooth"
        >
          {movies?.length === 0 ? (
            <div className="text-gray-400">No movies found.</div>
          ) : (
            movies?.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[180px] max-w-[200px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-gray-700"
              >
                <MoveiCard movie={movie} movieId={movie.id} />
              </div>
            ))
          )}
        </div>
        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full shadow-lg"
          style={{ pointerEvents: "auto" }}
          onClick={() => animateScroll("right")}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

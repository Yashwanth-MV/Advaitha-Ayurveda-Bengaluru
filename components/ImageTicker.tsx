"use client";

const TICKER_IMAGES = [
  "https://framerusercontent.com/images/M8Y50I4WTGlMO8eH7znvGA71yA.jpg?width=600",
  "https://framerusercontent.com/images/ozpMrAO4jKRFKXIMrIbVvaCcI8c.jpg?width=600",
  "https://framerusercontent.com/images/KHnReU1AdiCK8956cQFgJbsoVSg.jpg?width=600",
  "https://framerusercontent.com/images/5gayqX6I9wkPqq6NnkMFKUhywZc.jpg?width=600",
  "https://framerusercontent.com/images/hijHa5xphlL0NzGScePX5XGNs.jpg?width=600",
];

const allImages = [...TICKER_IMAGES, ...TICKER_IMAGES];

export default function ImageTicker() {
  return (
    <div className="overflow-hidden w-full">
      <div className="ticker-fwd flex gap-4 w-max">
        {allImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] h-[170px] md:w-[340px] md:h-[220px] rounded-2xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

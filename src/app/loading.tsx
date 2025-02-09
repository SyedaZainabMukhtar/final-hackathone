"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-0 left-1/2 animate-orbit"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-0 animate-orbit delay-150"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-0 left-1/2 animate-orbit delay-300"></div>
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 right-0 animate-orbit delay-450"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-600">Loading...</p>
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
        .animate-orbit {
          animation: orbit 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
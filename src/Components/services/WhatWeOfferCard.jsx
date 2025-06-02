export default function WhatWeOfferCard({ icon, title, description }) {
  return (
    <div className="offer-step bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center justify-between transform hover:scale-105 transition-transform duration-300" style={{ opacity: 0 }}>
    <div className="bg-primary inline-flex items-center justify-center w-20 h-20 rounded-full p-4 mb-6 mx-auto border-4 border-primary/30">
      {icon}
    </div>
    <h4 className="font-poppins font-semibold mb-3 text-secondary">{title}</h4>
    <p className="text-gray-600 text-xs sm:text-sm mt-auto">
      {description}
    </p>
  </div>
  );
}

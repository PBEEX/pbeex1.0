import React from "react";

const SaveYourSpot: React.FC = () => {
  return (
    <section className="relative bg-[radial-gradient(circle,rgba(255,90,90,1)_0%,rgba(16,37,57,1)_27%)] w-full text-center py-12 px-6 mt-5 md:px-20">
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 md:left-16 w-64 h-64">
            <img src="/Edge-border-top.png" alt="" />
        </div>
        <div className="absolute bottom-8 right-6 md:right-16 w-64 h-64">
            <img src="/Edge-border-bottom.png" alt="" />
        </div>

        {/* Decorative Icons */}
        <div className="hidden md:flex justify-between mt-12">
          <div className="absolute right-40 top-10 w-32 h-32 animate-spin-slow">
            <img src="/icon_colored.png" alt="Decorative icon" />
          </div>
          <div className="absolute bottom-10 left-40 w-32 h-32 animate-spin-slow">
            <img src="/icon_colored.png" alt="Decorative icon" />
          </div>
        </div>

        <div className="flex flex-col">
            {/* Text Content */}
            <div>
                <h2 className="text-white leading-10 font-bold text-5xl md:text-5xl">
                    SAVE YOUR SPOT <br /> AND START <br /> PREPARING TODAY
                </h2>
            </div>
            {/* Call to Action Button */}
            <div className="mt-8 flex md:justify-center">
                <a
                    href="#"
                    className="px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
                >
                    Get Involved
                    <span className="w-8 items-center">
                        <img src="/arrow up-right.png" alt="Arrow Icon" className="transition-transform duration-300" />
                    </span>
                </a>
            </div>
        </div>
    </section>
  );
};

export default SaveYourSpot;

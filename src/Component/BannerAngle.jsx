import React from 'react';

const BannerAngle = () => {
       return (
              <div>
                   <section className="relative bg-black text-white h-[800px]">
  {/* Your Content */}
  <div className="p-10">
    <h1 className="text-4xl text-white font-bold">Curved Bottom Section</h1>
    <p>This section has a wave shape at the bottom</p>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[calc(100%+1.3px)] h-[100px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
        fill="#ffffff"
      ></path>
    </svg>
  </div>
</section>


              </div>
       );
};

export default BannerAngle;
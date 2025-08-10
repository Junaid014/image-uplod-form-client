import React from "react";

const BannerBackground = ({ children }) => {
  return (
<div className="min-h-screen w-full bg-[#020617] relative">
    {/* Dark Sphere Grid Background */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "#020617",
        backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
        `,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }}
    />

    {/* Content with Rainbow Border */}
    <div className="relative z-10 flex justify-center items-center min-h-screen">
      <div
        className="p-[3px] rounded-xl bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-violet-500 animate-rainbow w-[600px]"
      >
        <div className="bg-[#9aa5b4] py-6 px-10 rounded-2xl flex">
          <div>
            <h1 className="text-[#ecf0f6] text-4xl font-bold roboto mb-14">Junaid Hosen</h1>
            <h3 className="roboto text-2xl">Frontend Developer</h3>
          </div>
       
        </div>
      </div>
    </div>

    <style>{`
      @keyframes rainbow {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .animate-rainbow {
        background-size: 400% 400%;
        animation: rainbow 3s linear infinite;
      }
    `}</style>
  </div>)
};

export default BannerBackground;

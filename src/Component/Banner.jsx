import AuroraText from '../../src/SeraUi/AuroraText '; // পাথ আপনার প্রজেক্ট অনুযায়ী সেট করুন

function Banner() {
  return (
    <div className="banner bg-gray-900 text-white py-16 text-center">
      <h1 className="text-5xl font-bold flex  justify-center gap-3 items-center">
        Welcome to Our<AuroraText/> Platform
      </h1>
      <p className="mt-4 text-lg">Discover awesome features!</p>
    </div>
  );
}

export default Banner;
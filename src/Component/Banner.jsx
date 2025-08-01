import { AuroraText } from "@/SeraUi/AuroraText ";


function Banner() {
  return (
    <section className="flex items-center justify-center min-h-screen text-black dark:text-white font-sans">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Welcome to our{" "}
        <AuroraText colors={["#38BDF8", "#3B82F6", "#EC4899"]} speed={1.5}>
          beautiful
        </AuroraText>{" "}
        platform
      </h1>
    </section>
  );
}

export default Banner;
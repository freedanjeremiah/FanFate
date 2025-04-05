import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg md:text-2xl mb-6">Join us and start predicting the markets like a pro.</p>
        <Link href="/signup">
          <a className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300">
            Get Started
          </a>
        </Link>
      </div>
    </section>
  );
}

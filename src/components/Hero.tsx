// src/components/Hero.tsx

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          AI-Powered Automation for Financial Excellence
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-gray-400">
          Quantum Ledger AI leverages cutting-edge AI to automate your financial processes, ensuring security, transparency, and efficiency.
        </p>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Discover Our Solutions
        </button>
      </div>
    </section>
  );
};

export default Hero;
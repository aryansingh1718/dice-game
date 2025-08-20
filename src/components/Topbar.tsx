type TopbarProps = {
  score: number;
  setNumber: (n: number) => void;
};

export default function Topbar({ score, setNumber }: TopbarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-110 gap-6 p-4">
      {/* Score Section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
          {score}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Total Score
        </h2>
      </div>

      {/* Number Choices */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5">
        {[1, 2, 3, 4, 5, 6].map(num => (
          <div
            key={num}
            className="border-2 px-6 py-4 sm:px-7 sm:py-5 font-extrabold 
                       text-2xl sm:text-3xl hover:bg-black hover:text-white 
                       cursor-pointer transition-all duration-200 rounded-lg"
            onClick={() => setNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

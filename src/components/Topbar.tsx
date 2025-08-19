type TopbarProps = {
  score: number;
  setNumber: (n: number) => void;
};

export default function Topbar({ score, setNumber }: TopbarProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center mx-10 my-3 mr-160">
        <h1 className="text-8xl font-semibold">{score}</h1>
        <h2 className="text-3xl font-semibold">Total Score</h2>
      </div>
      <div className="flex">
        {[1,2,3,4,5,6].map(num => (
          <div
            key={num}
            className="border-2 px-7 py-5 font-extrabold text-3xl hover:bg-black hover:text-white mr-7 cursor-pointer transition-all duration-200"
            onClick={() => setNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

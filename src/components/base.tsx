import { useState } from "react"

type BaseProps = {
  score?: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Base({setScore }: BaseProps) {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="border border-black py-2 px-20 mt-5 font-bold cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
        onClick={() => setScore(0)} // reset score
      >
        Reset Score
      </button>

      <button
        className="bg-black text-white mt-5 py-2 px-20 font-bold cursor-pointer hover:bg-white hover:text-black hover:border transition-all duration-200 mb-5"
        onClick={() => setShowRules(prev => !prev)}
      >
        {showRules ? "Hide Rules" : "Show Rules"}
      </button>

      {showRules && (
        <div className="bg-pink-50 flex flex-col p-4 rounded-lg">
          <h1 className="font-semibold text-2xl mb-3">How to play dice game</h1>
          <h2 className="font-semibold">Select any number.</h2>
          <h2 className="font-semibold">Click on dice image.</h2>
          <h3 className="font-semibold">
            After click on dice, if selected number is equal to the number on
            dice, then you will get same point as dice.
          </h3>
          <h3 className="font-semibold">
            If the numbers don't match, then points equivalent to the number on
            dice will be deducted.
          </h3>
        </div>
      )}
    </div>
  );
}

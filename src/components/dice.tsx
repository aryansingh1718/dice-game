import { useState } from "react";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

type DiceProps = {
  number: number | null;
  setScore: (scoreUpdater: (prev: number) => number) => void;
};

export default function Dice({ number, setScore }: DiceProps) {
  const [diceFace, setDiceFace] = useState(dice1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    let rollCount = 0;
    const interval = setInterval(() => {
      const randomFace = Math.floor(Math.random() * 6);
      setDiceFace(diceImages[randomFace]);

      rollCount++;
      if (rollCount > 10) {
        clearInterval(interval);
        const finalFace = Math.floor(Math.random() * 6);
        setDiceFace(diceImages[finalFace]);
        setRolling(false);

        // scoring logic
        if (number !== null) {
          if (finalFace + 1 === number) {
            setScore(prev => prev + number);
            alert(`Correct! +${number} points`);
          } else {
            setScore(prev => prev - (finalFace + 1));
            alert(` Wrong! -${finalFace + 1} points`);
          }
        } else {
          alert(" Please select a number first!");
        }
      }
    }, 200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={diceFace}
        alt="Dice"
        className={`w-60 h-60 cursor-pointer transition-transform duration-200 ${
          rolling ? "animate-spin" : ""
        }`}
        onClick={rollDice}
      />
      <p className="font-semibold text-3xl mt-3">Click on Dice to roll</p>
    </div>
  );
}

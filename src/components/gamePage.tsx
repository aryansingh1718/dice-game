import { useState } from "react";
import Base from "./base";
import Dice from "./dice";
import Topbar from "./Topbar";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState<number | null>(null); // store selected number here

  return (
    <div className="flex flex-col items-center">
      <Topbar score={score} setNumber={setNumber} />   {/* pass setNumber */}
      <Dice number={number} setScore= {setScore}/>                         {/* now it works */}
      <Base setScore={setScore} />
    </div>
  );
}

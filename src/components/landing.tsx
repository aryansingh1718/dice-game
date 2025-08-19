import { useNavigate } from "react-router-dom";
import dicePic from "../assets/diceGame.png";

export default function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-row">
      <div>
        <img src={dicePic} alt="Dice Game" className="w-160 h-120 object-fit mt-20 ml-30" />
      </div>
      <div className="ml-10 mt-60">
        <div className="text-8xl font-bold mb-6">DICE GAME</div>
        <div>
          <button className="bg-black text-white px-14 py-2 rounded-md font-semibold ml-85 cursor-pointer hover:bg-gray-800" onClick={() => {
            navigate("/GamePage")
          }}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

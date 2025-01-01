import { useState } from "react"
import Game from "../Game/Game";
export default function StartMenu(){
    const [gameOver,setGameOver] = useState<boolean>(true);
    return (
        <div className="text-center flex flex-col  items-center gap-[10px] w-[100%] mt-[30px]">
            <h1 className="text-[30px]">Welcome to rock paper scissors game</h1>
            <button className="bg-[#000] text-[#fff] p-[20px] rounded-[5px]" onClick={()=>{
                setGameOver(false)
            }}>Click here</button>
            {!gameOver&& <Game />}
        </div>
    )
}
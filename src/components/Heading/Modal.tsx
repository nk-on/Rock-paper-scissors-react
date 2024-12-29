import { instructionsArray } from "./instructionsArray";
import Instruction from "./Instruction";
export default function Modal({setModalVisable}:{setModalVisable:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-5">
      <div className="flex flex-col items-center w-[300px] p-[10px] bg-[#fff] cursor-pointer gap-[10px]">
        <div className="flex justify-evenly w-[90%]">
           <h1>Game Instructions</h1>
           <p onClick={()=>{
            setModalVisable(false);
           }}>x</p>
        </div>
        <div className="w-[90%] h-[2px] bg-[#808080]"></div>
        <div className="w-[90%] min-h-[100px] bg-[#808080]">
          {instructionsArray.map((instruction)=>{
              return <Instruction key = {instruction.id} InstructionText = {instruction.text} />
          })}
        </div>
      </div>
    </div>
  );
}

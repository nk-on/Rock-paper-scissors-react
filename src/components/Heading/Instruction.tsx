export default function Instruction({InstructionText}:{InstructionText:string}){
    return(<div className="w-100% border-[3px] border[#000] p-[10px]">
        {InstructionText}
    </div>);
}
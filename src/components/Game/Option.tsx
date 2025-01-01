import optionsArray from "./optionsArray";
interface optionProps {
    draw:React.MutableRefObject<boolean>;
    optionEmoji:string;
    setPlayerChoice:React.Dispatch<React.SetStateAction<string>>;
    setComputerChoice:React.Dispatch<React.SetStateAction<string>>;
}
export default function Option({draw,optionEmoji,setPlayerChoice,setComputerChoice}:optionProps){
    return (
        <div onClick={()=>{
            const computersChoice:string = optionsArray[Math.floor(Math.random()*(optionsArray.length))].emoji;
            setPlayerChoice(optionEmoji);
            setComputerChoice(computersChoice);
            if(optionEmoji === computersChoice){
                draw.current = true;
            }
        }}>{optionEmoji}</div>
    )
}
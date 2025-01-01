import optionsArray from "./optionsArray";
interface optionProps {
    optionEmoji:string;
    setPlayerChoice:React.Dispatch<React.SetStateAction<string>>;
    setComputerChoice:React.Dispatch<React.SetStateAction<string>>;
}
export default function Option({optionEmoji,setPlayerChoice,setComputerChoice}:optionProps){
    return (
        <div onClick={()=>{
            const computersChoice:string = optionsArray[Math.floor(Math.random()*(optionsArray.length))].emoji;
            setPlayerChoice(optionEmoji);
            setComputerChoice(computersChoice);
        }}>{optionEmoji}</div>
    )
}
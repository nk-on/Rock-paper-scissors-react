import optionsArray from './optionsArray';
import Option from './Option';
import { useEffect, useRef, useState } from 'react';
export default function Game() {
  {
    /* 1. user should be able to choose which option they want 
        2. computer should be able to generete side 
        3. Rock wins against scissors; paper wins against rock; and scissors wins against paper
        4. in each turn computer should declare winner and add point to the side
        
         */
  }
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [playersPoint, setPlayersPoint] = useState(0);
  const [computersPoint, setComputersPoint] = useState(0);
  const draw = useRef(false);
  useEffect(() => {
    optionsArray.forEach((option) => {
      if (option.emoji === playerChoice && option.beats === computerChoice) {
        setPlayersPoint(playersPoint + 1);
      }
      if (option.emoji === computerChoice && option.beats === playerChoice) {
        setComputersPoint(computersPoint + 1);
      }
    });
  }, [playerChoice, computerChoice]);
  return (
    <div className="w-[100%] h-[350px] grid grid-cols-1">
      <div className="flex justify-evenly text-[30px]">
        <div>
          <span>{playersPoint}</span>
          <h1>Player</h1>
          <div>{playerChoice}</div>
        </div>
        <div>
          {draw.current ? 'Draw' : ''}
          {optionsArray.map((option) => {
            if (
              option.emoji === playerChoice &&
              option.beats === computerChoice
            ) {
              draw.current = false;
              return 'Player';
            }
            if (
              option.emoji === computerChoice &&
              option.beats === playerChoice
            ) {
              draw.current = false;
              return 'Computer';
            }
          })}
        </div>
        <div>
          <span>{computersPoint}</span>
          <h1>Computer</h1>
          <div>{computerChoice}</div>
        </div>
      </div>
      <div className="flex justify-evenly text-[30px] cursor-pointer">
        {optionsArray.map((option) => {
          return (
            <Option
              draw={draw}
              optionEmoji={option.emoji}
              setPlayerChoice={setPlayerChoice}
              setComputerChoice={setComputerChoice}
            />
          );
        })}
      </div>
    </div>
  );
}

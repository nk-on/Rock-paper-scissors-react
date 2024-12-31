export default function Game(){
    return (
        <div className="w-[100%] h-[350px] grid grid-cols-1">
            <div className="flex justify-evenly text-[30px]">
                <h1>Player</h1>
                <h1>Computer</h1>
            </div>
            <div className="flex justify-evenly text-[30px] cursor-pointer">
                <div>✊</div>
                <div>✋</div>
                <div>✌️</div>
            </div>
        </div>
    )
}
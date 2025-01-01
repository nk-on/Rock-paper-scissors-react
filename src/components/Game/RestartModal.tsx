export default function RestartModal({ winner }: { winner: string }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-5">
      <div className="flex flex-col items-center w-[300px]  p-[10px] bg-[#fff] cursor-pointer gap-[10px]">
        {winner} Has Won
        <button className="w-[80%] h-[50px] bg-[#000] text-[#fff]"
          onClick={() => {
            location.reload();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

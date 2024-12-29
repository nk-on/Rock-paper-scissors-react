import { useState } from "react";
import Modal from "./Modal";
export default function Heading() {
  const [modalVisable,setModalVisable] = useState(false);
  return (
    <>
      <div className="w-full h-[20%] bg-[#343A3F] text-[#fff] flex justify-around	 items-center">
        <h1>Rock paper scissors</h1>
        <div className="hover:bg-[#000] w-[90px] rounded-[5px] flex justify-center items-center">
          <button onClick={()=>{
            setModalVisable(true);
          }}>Instuctions</button>
        </div>
      </div>
      {modalVisable && <Modal setModalVisable={setModalVisable} />}
    </>
  );
}

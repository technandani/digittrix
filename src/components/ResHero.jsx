import React from "react";

const ResHero = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex items-center justify-center w-screen">
         <div className="w-screen" style={{position:'absolute', left:'0'}}> <img
            src="https://res.cloudinary.com/dpmengi5q/image/upload/v1738343242/Mask_group_ubbqbd.png"
            alt="" className="z-0 w-screen"
          /></div>
          <div
            className="z-50 h-10"
            style={{ position: "relative", top: "10px" }}
          >
            <img
              src="https://res.cloudinary.com/dpmengi5q/image/upload/v1738340646/Group_35324_ebm29s.png"
              alt=""
            />
          </div>
        </div>
        <div className="px-2 py-4">
          <div className="h-[40px]">
            <div className="flex justify-between items-center p-2 rounded h-full bg-gray-200 shadow">
              <div>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <input type="text" placeholder="Search con......." style={{outline: 'none'}} />
              </div>
              <div>
                <i class="fa-solid fa-microphone"></i>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="w-[85%] flex p-2 overflow-hidden text-sm">
                Park View Street, Chandigarh, 160007
            </div>
            <div className="text-blue-800 underline text-sm">Change</div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dpmengi5q/image/upload/v1738340302/Group_38179_sthi3i.png"
                alt=""
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <img
                src="https://res.cloudinary.com/dpmengi5q/image/upload/v1738340302/Group_38183_iebfpz.png"
                alt=""
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dpmengi5q/image/upload/v1738340302/Mask_group_1_e2tubv.png"
                alt=""
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResHero;

import React from "react";

const Main = () => {
  return (
    <div className="bg-[#06262a]">
      <div class="h-[100vh] flex items-center justify-between px-16">
        <div class="text-white bg-clip-text text-6xl font-bold">
          {/* <div className="group overflow-hidden relative leading-6">
            <span className="inline-block p-5 transition duration-500 ease-out group-hover:-translate-y-[120%]">
              Welcome
            </span>

            <span className="absolute left-0 translate-y-[150%] rotate-12 inline-block p-5 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
              Welcome
            </span>
          </div> */}
          <div className="h_title  relative w-full text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 text-end inline-block overflow-hidden align-bottom">
            <span className="  inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              Visit&nbsp;
            </span>
          </span>
          <span className="align- -mb-1.5 -mt-6 inline-block overflow-hidden font-medium text-purple">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Specialised&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Doctor&nbsp; 
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;By
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom leading-[90%] font-medium  lg:text-[8.7vw]">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 leading-[81%] text-green will-change-transform">
            &nbsp;Your&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block flex-col justify-center overflow-hidden font-medium  align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Symptom&nbsp;
            </span>
          </span>
        </div>
        </div>
        <div class=" ">
          <img src="../assets/doctorbg.png" alt="doctor"  className="translate-y-[350px] scale-75 right-16"/>
        </div>
      </div>
    </div>
  );
};

export default Main;

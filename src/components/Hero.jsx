import React from "react";

const Hero = () => {
  return (
    <>
      <header
        style={{
          padding: "10px 150px",
          overflow: "hidden",
        }}
        className="bg-blue-800 h-screen text-white"
      >
        <nav className="flex items-center justify-between">
          <div className="logo" style={{ height: "100%" }}>
            <img src="images/20.png" alt="" height="100%" width="100%" />
          </div>
          <div
            className="flex items-center justify-between w-[130px] rounded"
            style={{
              border: "solid #fff 2px",
              padding: "10px 15px",
              width: 150,
            }}
          >
            <div className="flex h-full items-center justify-between gap-2">
              <i class="fa-solid fa-location-dot"></i>
              <div className="text-md font-semibold">Location</div>
            </div>
            <i className="fa-solid fa-angle-down" />
          </div>
          <div />
          <div />
          <div
            className="nav2"
            style={{ display: "flex", gap: 15, alignItems: "center" }}
          >
            <div className="text-lg">Become a Consultant</div>
            <div className="navCon1" style={{ fontSize: 25 }}>
              <i className="fa-solid fa-comments-dollar" />
            </div>
            <div className="navCon1" style={{ fontSize: 25 }}>
              <i className="fa-regular fa-bell" />
            </div>
            <div className="navCon1" style={{}}>
              <img src="images/21.png" alt="" style={{ borderRadius: "50%" }} />
            </div>
            <div className="navCon1">$0.00</div>
          </div>
        </nav>
        {/* Hero Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="">
              <h1 className="font-medium text-2xl text-left">
                Guiding Your <span>Path to Success</span>
              </h1>
              <h1 className="font-medium text-2xl text-left">
                Expert Consultation at Your Service
              </h1>
              <div className="flex justify-between items-center bg-white rounded">
                <input
                  type="text"
                  className="outline-[none] bg-[transprent] text-gray-800  px-2  "
                  placeholder="Search anything here..."
                />
                <div className="m-1 px-2 py-2 w-[120px] text-white bg-blue-900 rounded flex items-center justify-center gap-2">
                <i class="fa-solid fa-magnifying-glass"></i> Search
                </div>
              </div>
              <div className="text-sm py-2">
                <i class="fa-solid fa-clock-rotate-left"></i> Recent Searches:
                Institutes in Mohali, Study Buddies, IELTS
              </div>
            </div>
            <div className="bottomHero">
              <div className=" flex gap-30" style={{ display: "flex" }}>
                <div className="flex h-[60px] gap-2 items-center">
                  <div className="text-4xl">
                    <i class="fa-solid fa-user-tie"></i>
                  </div>
                  <div>
                    <div className="bottomtopcon"> 500+ Registered</div>
                    <div className="bottomtopcon">Educational Consultants</div>
                  </div>
                </div>
                <div className="flex h-[60px] gap-2 items-center">
                  <div className="text-4xl">
                    <i class="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="bottomtopcon"> 400+ Registered</div>
                    <div className="bottomtopcon">Training Institutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image h-[90vh]" style={{position:'relative', top:'60px' }}>
            <img
              src="images/1.png"
              alt="Hero Image"
              className="h-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;

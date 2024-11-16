const TulipFace = () => (
  <div className="tulipFace">
    <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-900 top-[55px] left-[69px]"></div>
    <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-900 top-[55px] left-[119px]"></div>
    <div className="absolute w-[37px] h-[18.5px] border-[5px] border-b-0 border-gray-900 rounded-t-[100px] rotate-180 top-[73px] left-[81px]"></div>
    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#ff8081] top-[66px] left-[44px]"></div>
    <div className="absolute w-[30px] h-[30px] rounded-full bg-[#ff8081] top-[66px] left-[123px]"></div>
  </div>
);

const TulipHead = ({ isRightBaby }) => (
  <div
    className={`tulipHead absolute top-[-159px] left-[-102px] bg-[#f3a69e] w-[200px] h-[165px] rounded-b-[50%] z-0 ${
      isRightBaby ? "rotate-[23deg] -left-[80px]" : "-rotate-[11deg]"
    }`}
  >
    <div className="absolute -top-[60px] left-[-17px] -rotate-[27deg] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-transparent border-b-[#f3a69e]"></div>
    <div className="absolute -top-[32px] left-[30px] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[32px] border-transparent border-b-[#ff8081] -z-10"></div>
    <div className="absolute -top-[60px] left-[70px] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-transparent border-b-[#f3a69e]"></div>
    <div className="absolute -top-[32px] left-[110.7px] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[32px] border-transparent border-b-[#ff8081] -z-10"></div>
    <div className="absolute -top-[43px] left-[156px] rotate-[27deg] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-transparent border-b-[#f3a69e]"></div>
    <TulipFace />
  </div>
);

const Tulip = ({ className = "", isLeftBaby = false, isRightBaby = false }) => (
  <div
    className={`tulip absolute w-[10px] h-[400px] my-[150px] mx-[100px] float-left ${className}`}
  >
    <div className="stem absolute h-[200px] w-[10px] rounded-[50px] bg-[#25af59] left-1/2 bottom-0 -translate-x-1/2 z-0">
      <TulipHead isRightBaby={isRightBaby} />
      {/* Right Stem Leaf */}
      <div
        className={`absolute ${
          isLeftBaby
            ? "top-[105px] -rotate-[32deg] left-[-15px]"
            : isRightBaby
            ? "top-[70px] -rotate-[32deg] left-[-15px]"
            : "top-[60%] -rotate-[10deg] left-[-1px]"
        } w-[100px] h-[60px] bg-[#139a3e] rounded-[90%_0_90%_0]`}
      ></div>
      {/* Left Stem Leaf */}
      <div
        className={`absolute top-[20%] left-[-70px] w-[80px] h-[60px] bg-[#139a3e] rounded-[90%_0_90%_0] rotate-90 -z-20 ${
          isLeftBaby ? "scale-[0.7] rotate-90" : isRightBaby ? "invisible" : ""
        }`}
      ></div>
      {/* Tulip Leaves */}
      <div className="absolute rotate-90 left-1 w-[40px] h-[40px] bg-[#ff8081] -z-10 rounded-[90%_0_90%_0]"></div>
      <div className="absolute -left-[33px] w-[40px] h-[40px] bg-[#ff8081] -z-10 rounded-[90%_0_90%_0]"></div>
    </div>
  </div>
);

const TulipsScene = () => (
  <div className="min-h-screen bg-white">
    <h1 className="text-center text-black text-3xl font-semibold pt-4">
      Hi, whatever :&#41;&#41;
    </h1>

    {/* Wrapper div that scales the entire tulip scene */}
    <div className="flex justify-center items-center mt-8">
      <div className="relative w-[200px] mx-auto scale-[0.6] sm:scale-[0.8] md:scale-100">
        {/* Main Tulip */}
        <Tulip />

        {/* Left Baby Tulip */}
        <div className="absolute left-[-153px] top-[74px] scale-[0.6]">
          <Tulip isLeftBaby={true} />
        </div>

        {/* Right Baby Tulip */}
        <div className="absolute left-[220px] top-[42px] scale-[0.8]">
          <Tulip isRightBaby={true} />
        </div>
      </div>
    </div>
  </div>
);

export default TulipsScene;

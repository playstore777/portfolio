interface props {}

const CuteCandles: React.FC<props> = () => {
  return (
    <div className="absolute right-1/2 md:right-1/4 bottom-1/4 scale-[1.5] -translate-x-1/2 -translate-y-1/2">
      <div className="absolute left-1/2 top-1/2 w-[250px] h-[150px] -translate-x-1/2 -translate-y-full">
        <div className="absolute top-[35%] left-[35%] w-[75px] h-[75px] rounded-full z-0 -translate-x-1/4 -translate-y-1/2 scale-0 border-2 border-solid border-[rgba(255, 255, 255, 0.2)] animate-expand-light"></div>
        <div className="absolute top-1/2 left-1/2 w-[35px] h-[100px] bg-white border-[3px] border-solid border-[#673c63] border-b-0 rounded-[3px] origin-right translate-x-[60%] -translate-y-1/4 shadow-[inset_-2px_0px_0px_#95c6f2] animate-expand-body">
          <div>
            <div className="absolute left-1/2 top-0 w-[35px] h-[30px] -translate-x-1/2 translate-y-0">
              <span className="absolute left-[30%] top-[20%] w-[5px] h-[5px] rounded-full bg-[#673c63] -translate-x-[70%] translate-y-0 animate-blink-eyes"></span>
              <span className="absolute left-[70%] top-[20%] w-[5px] h-[5px] rounded-full bg-[#673c63] -translate-x-[70%] translate-y-0 animate-blink-eyes"></span>
            </div>
            <div className="absolute left-[40%] top-[20%] w-0 h-0 rounded-3xl bg-[#673c63] -translate-x-1/2 -translate-y-1/2 animate-uff"></div>
          </div>
          <div className="absolute top-0 left-1/2 bg-[#673c63] rounded-lg -translate-x-1/2 -translate-y-full w-[3px] h-3 origin-[bottom_center]"></div>
        </div>

        <div className="absolute top-[65%] left-[20%] w-[42px] h-[60px] bg-white border-[3px] border-solid border-[#673c63] border-b-0 rounded-[3px] origin-right translate-x-[60%] -translate-y-[15%] shadow-[inset_-2px_0px_0px_#95c6f2] animate-shake-left">
          <div>
            <div className="absolute left-1/2 top-0 w-[35px] h-[30px] -translate-x-1/2 translate-y-0">
              <div className="absolute left-[30%] top-1/2 w-[5px] h-[5px] inline-block border-0 border-solid border-[#673c63] rounded-full bg-[#673c63] -translate-x-[80%] translate-y-0 animate-changeto-lower"></div>
              <div className="absolute left-[70%] top-1/2 w-[5px] h-[5px] inline-block border-0 border-solid border-[#673c63] rounded-full bg-[#673c63] -translate-x-[80%] translate-y-0 animate-changeto-greater"></div>
            </div>
          </div>
          <div className="absolute left-1/2 top-0 w-[3px] h-[15px] bg-[#673c63] rounded-lg -translate-x-1/2 -translate-y-full  animate-stick-animation"></div>
        </div>
        <div className="absolute top-1/2 left-[38%] block w-0 h-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-[#ff9800] -translate-x-1/2 -translate-y-1/2 animate-dance-fire"></div>
        <div className="absolute left-[30%] top-1/2 w-0 h-[3px] bg-slate-500 -translate-x-1/2 -translate-y-1/2 animate-move-left"></div>
        <div className="absolute left-[30%] top-[40%] w-0 h-0 bg-slate-500 rounded-[10px] -translate-x-1/2 -translate-y-1/2 animate-move-top"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[250px] h-[5px] bg-gradient-to-r from-yellow-400 to-orange-300 -translate-x-1/2 -translate-y-1/2 shadow-[0_2px_5px_#111] z-10"></div>
    </div>
  );
};

export default CuteCandles;

interface props {}

const IntroText: React.FC<props> = () => {
  return (
    <>
      <h1 className="pt-8 sm:pt-24 font-serif text-4xl md:text-6xl relative">
        👋 Hi I&apos;m A
        <span className="group">
          <span className="relative underline decoration-orange-400 hover:decoration-transparent hover:text-yellow-400 cursor-pointer">
            dil
            <div className="flex flex-col p-4 bg-gradient-to-r from-yellow-300 to-orange-400 w-60 text-black text-xl rounded-md z-20 absolute md:left-[130%] md:-top-1/4 tooltip-item invisible group-hover:visible">
              &quot;Dil&quot; means heart in Hindi (&quot;A Heart&quot;) A❤
            </div>
          </span>
        </span>
      </h1>

      <p
        className="w-4/5 md:w-4/12 text-xl md:text-2xl mt-4 md:mt-6"
        aria-label="intro"
      >
        I&apos;m a Frontend Developer, I&apos;m passionate about programming and
        gaming, where creativity meets logic.
      </p>
    </>
  );
};

export default IntroText;

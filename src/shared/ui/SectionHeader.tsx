interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  description,
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibolds tracking-widest bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:tex-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

interface TechIconProps {
  component: React.ElementType;
}

const TechIcon: React.FC<TechIconProps> = ({ component }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      {/* To give the gradient to the svgs, we have almost hidden.*/}
      <svg className="size-0 absolute" aria-hidden="true">
        <linearGradient id="tech-icon-gradient">
          {/* <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" /> */}
          <stop offset="0%" stopColor="rgb(253 224 71 / 0.6)" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;

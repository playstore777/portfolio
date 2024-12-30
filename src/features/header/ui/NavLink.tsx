interface props {
  children: React.ReactNode;
  url: string;
}

const NavLink: React.FC<props> = ({ url, children }) => {
  return (
    <a
      href={url}
      className="hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 hover:text-transparent hover:bg-clip-text"
    >
      {children}
    </a>
  );
};

export default NavLink;

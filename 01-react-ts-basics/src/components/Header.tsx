interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;

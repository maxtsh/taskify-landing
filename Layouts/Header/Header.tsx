import Image from "next/image";
import { Nav } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <Nav>
      <div className="nav__left">
        <Image
          width={100}
          height={100}
          src="/assets/images/logo_with_title.png"
          alt="mtsh_taskify_logo"
        />
      </div>
      <div className="nav__right"></div>
    </Nav>
  );
};

export default Header;

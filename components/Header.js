import Image from "next/image";
import { info } from "@/data";
import SocialLinks from "@/components/SocialLinks";

const Header = () => {
  return (
    <header className="container flex text-center mx-auto pb-6">
      <div className="mx-auto">
        <Image
          height={350}
          width={300}
          src="/profile-pic.svg"
          alt="Profile Picture"
          className="h-24 rounded-full mx-auto mb-5 shadow-2xl"
        />
        <h1 className="font-bold text-2xl mb-1">{info.name}</h1>
        <p className="whitespace-break-spaces mb-4 tracking-wide">
          {info.title}
        </p>
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import LogoPng from '../../public/images/logo.png';

export const Logo = () => {
  return (
    <Image src={LogoPng} alt="Logo" width={44} />
  );
};
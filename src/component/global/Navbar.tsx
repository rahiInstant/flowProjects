import Image from "next/image";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="">
      <aside className="">
        <p className="text-red-900 text-2xl">Fu</p>
        <Image
          src="/fuzzieLogo (1).png"
          alt="Fuzzie Logo"
          width={15}
          height={15}
        />
        <p className="">zie</p>
      </aside>
    </header>
  );
};

export default Navbar;

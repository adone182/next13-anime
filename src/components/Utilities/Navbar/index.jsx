import Link from "next/link";
import InputSearch from "./InputSearch";
const Navbar = () => {
  return (
    <header className="bg-color-accent md:px-32 px-5 py-4">
      <div className="flex md:flex-row flex-col gap-2 justify-between items-center">
        <Link href="/" className="font-bold text-color-primary text-3xl">
          OnlyAnime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;

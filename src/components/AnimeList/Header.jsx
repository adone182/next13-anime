import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-md underline hover:text-color-accent transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

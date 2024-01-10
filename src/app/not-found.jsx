"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={52} className="text-color-accent gap-5" />
        <h1 className="text-color-accent font-bold text-5xl py-10">404</h1>
        <h2 className="text-2xl">Not Found</h2>

        <Link
          href="/"
          className="text-color-secondary underline py-3 hover:text-color-accent transition-all"
        >
          {" "}
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

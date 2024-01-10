"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        className="rounded-lg p-2"
        type="text"
        placeholder="search anime ..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-3" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

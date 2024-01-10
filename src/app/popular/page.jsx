"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const topAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(topAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="md:px-32 px-5 md:py-10 py-5">
      <HeaderMenu title={` POPULAR ANIME #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;

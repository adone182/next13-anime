import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section className="md:p-32 p-5">
        <Header title={`Search result from ${decodeKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

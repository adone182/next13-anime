import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponese,
  repoduceAnime,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const topManga = await getAnimeResponse("top/manga", "limit=8");

  let recommendedAnime = await getNestedAnimeResponese(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = repoduceAnime(recommendedAnime, 4);

  return (
    <>
      <section className="md:px-32 px-5 md:py-10 py-5">
        <Header title="Popular Anime" linkHref="/popular" linkTitle="See All" />
        <AnimeList api={topAnime} />
      </section>

      <section className="md:px-32 px-5 md:py-10 py-5">
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>

      <section className="md:px-32 px-5 md:py-10 py-5">
        <Header title="Popular Manga" linkHref="/manga" linkTitle="See All" />
        <AnimeList api={topManga} />
      </section>
    </>
  );
};

export default Page;

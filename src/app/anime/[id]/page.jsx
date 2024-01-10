import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);
  return (
    <div className="md:px-32 px-5 md:py-10 py-5">
      <h1 className="text-color-accent text-center font-bold text-2xl pb-5">
        {anime.data.title} - ( {anime.data.year} )
      </h1>

      <div className="flex gap-3 pt-5 overflow-x-auto">
        <div className="w-36 p-1 flex flex-col justify-center items-center rounded border border-color-accent mb-8">
          <h2>RANKING</h2>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 p-1 flex flex-col justify-center items-center rounded border border-color-accent mb-8">
          <h2>SCORE</h2>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 p-1 flex flex-col justify-center items-center rounded border border-color-accent mb-8">
          <h2>EPISODE</h2>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 p-1 flex flex-col justify-center items-center rounded border border-color-accent mb-8">
          <h2>DURATION</h2>
          <p>{anime.data.duration}</p>
        </div>
      </div>

      <div className="flex sm:flex-nowrap flex-wrap gap-5 text-color-secondary">
        <div className="sm:w-1/4 w-full">
          <Image
            src={anime.data?.images.webp.image_url}
            alt={anime.data?.images.jpg.image_url}
            width={200}
            height={200}
            className="w-full rounded object-cover"
          />
        </div>
        <div className="sm:w-3/4 w-full">
          <p className="text-justify text-md">{anime.data.synopsis}</p>
        </div>
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;

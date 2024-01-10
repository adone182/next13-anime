import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-col-2 gap-4 py-10">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer rounded-xl shadow-xl hover:text-color-accent transition-all"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={350}
              height={350}
              className="w-full md:max-h-64 object-cover"
            />
            <h2 className="md:font-bold font-semibold md:text-md text-sm py-4 px-4 text-center">
              {anime.title}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;

export const getAnimeResponse = async (resource, query) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${apiBaseUrl}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponese = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  return response.data.flatMap((result) => result[objectProperty]);
};

export const repoduceAnime = (data, gap) => {
  const frist = ~~(Math.random() * (data.length - gap) + 1);
  const last = frist + gap;

  const response = {
    data: data.slice(frist, last),
  };

  return response;
};

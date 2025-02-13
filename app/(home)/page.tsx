export const metadata = {
  title: "Home | Nest Movies",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL, {
    cache: "force-cache",
  });
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}

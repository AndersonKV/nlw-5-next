import { GetStaticProps } from "next";

type Episodes = {
  id: string;
  title: string;
  numbers: string;
};

type HomeProps = {
  episodes: Episodes[];
};
export default function Home(props: HomeProps) {
  console.log(props.episodes);
  return (
    <div>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc"
  );
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidade: 60 * 60 * 8,
  };
};

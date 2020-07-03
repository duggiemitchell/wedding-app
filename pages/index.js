import Head from "next/head";
import useSWR from "swr";
import Layout, { siteTitle } from "components/layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>{data.text}</section>
    </Layout>
  );
}

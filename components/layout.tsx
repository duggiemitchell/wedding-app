import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "Erica & Ryan are getting hitched!";

type Props = {
  children: Element;
  home: boolean;
};
const Layout = ({ children, home }: Props) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Information on Ryan/Edge wedding 2020"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <main>{children}</main>
  </div>
);

export default Layout;

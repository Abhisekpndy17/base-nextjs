import style from "../../styles/Home.module.css";
import Link from "next/link";

const articles = ({ articles }) => {
  return (
    <div>
      <h2 className={style.title}>
        From <span>Fake API</span>
      </h2>
      <p className={style.description}>
        These all below Blogs are render from the Fake API{" "}
        <Link href="https://jsonplaceholder.typicode.com/">
          <u>jsonplaceholder</u>
        </Link>
      </p>

      <div className={style.grid}>
        {articles.map((article) => (
          <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div className={style.card}>
              <h3>{article.title} &rarr; </h3>
              <p>{article.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default articles;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=20`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

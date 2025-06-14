import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import classes from "./ArticleList.module.css";

export default function ArticleList() {
  return (
    <div className={classes.list} data-aos="fade-up">
      <h1>Nos articles</h1>
      <div className={classes.cards}>
        {articles.map((article) => (
          <article key={article.id} className={classes.card} data-aos="zoom-in">
            <img src={article.image} alt="" className={classes.image} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Link to={`/blog/${article.id}`} className={classes.link}>
              Lire la suite
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

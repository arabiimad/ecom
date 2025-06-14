import { useParams } from "react-router-dom";
import { articles } from "../../data/articles";
import classes from "./ArticleDetail.module.css";

export default function ArticleDetail() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <p className={classes.notFound}>Article introuvable.</p>;
  }

  return (
    <div className={classes.detail} data-aos="fade-up">
      <h1>{article.title}</h1>
      <img src={article.image} alt="" className={classes.image} />
      <p className={classes.content}>{article.content}</p>
    </div>
  );
}

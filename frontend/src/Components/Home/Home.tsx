// src/Components/Home/Home.tsx
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

import ceSvg from "../../assets/quality.svg";        // à remplacer par un pictogramme CE
import truckSvg from "../../assets/car.svg";        // livraison
import supportSvg from "../../assets/support.svg";  // crée ou importe un SVG
import stockSvg from "../../assets/stock.svg";      // stock réel

import BrowseCategory from "../BrowseCategory/BrowseCategory";

const cards = [
  {
    heading: "Qualité CE / MDR",
    text: "Tous nos dispositifs portent le marquage CE et répondent au règlement 2017/745.",
    backColor: "rgb(206,235,233)",
    svg: ceSvg,
  },
  {
    heading: "Expédition 24-48 h",
    text: "Commande préparée le jour même, livraison suivie partout en France.",
    backColor: "rgb(214,229,251)",
    svg: truckSvg,
  },
  {
    heading: "Support technico-dentaire",
    text: "Prothésistes & chirurgiens-dentistes vous répondent au 09 88 77 66 55.",
    backColor: "rgb(226,242,178)",
    svg: supportSvg,
  },
  {
    heading: "Stock garanti",
    text: "Plus de 5 000 références en entrepôt, ruptures minimisées.",
    backColor: "rgb(248,227,213)",
    svg: stockSvg,
  },
];

export default function Home() {
  return (
    <div className={classes.homeContainer}>
      {/* HERO */}
      <section className={classes.textContainer}>
        <h1>Matériel et consommables dentaires professionnels</h1>

        <p>
          Cabinets, laboratoires et praticiens&nbsp;: équipez-vous en toute
          confiance ! Instruments, implants, consommables stériles… tout est
          disponible en un clic et conforme aux normes européennes.
        </p>

        {/* CTA vers la boutique (respecte ton basename “/E-commerce”) */}
        <a href="/E-commerce/shop" className={classes.ctaButton}>
          Accéder à la boutique
        </a>
      </section>

      {/* AVANTAGES */}
      <article className={classes.cardArticle}>
        <h2>Pourquoi nous choisir&nbsp;?</h2>
        <div className={classes.cardContainer}>
          {cards.map((card, index) => (
            <Card
              key={index}
              className={classes.card}
              style={{ backgroundColor: card.backColor }}
            >
              <div className={classes.svgContainer}>
                <img src={card.svg} alt={card.heading} className={classes.svg} />
              </div>
              <h3>{card.heading}</h3>
              <p>{card.text}</p>
            </Card>
          ))}
        </div>
      </article>

      {/* CATEGORIES */}
      <BrowseCategory title="Parcourir les catégories" />

      {/* CONTACT (ancre liée à la navbar) */}
      <section id="contact" className={classes.contactSection}>
        <h2>Contact</h2>
        <p>📍 12 rue de l’Odonto – 75000 Paris</p>
        <p>☎ 09 88 77 66 55</p>
        <p>✉ contact@dentashop.fr</p>
      </section>
    </div>
  );
}

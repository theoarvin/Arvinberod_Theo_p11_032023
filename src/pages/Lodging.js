import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Star from "../components/Star";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import ErrorPage from "./ErrorPage";

const Lodging = ({ value }) => {
  const [data, setData] = useState(value);
  const { id } = useParams();
  const product = data.find((l) => l.id === id);

  if (product === undefined) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Header />
      <Slide images={product.pictures} />
      <div className="infos-location">
        <div className="title-location">
          <h2>{product.title}</h2>
          <p>{product.location}</p>
          <ul>
            {product.tags.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="rating-block">
          <div className="profil">
            <div className="profil-user">
              <h4>{product.host.name}</h4>
              <img src={product.host.picture} alt="profil rating " />
            </div>
            <div className="rating">
              <Star value={product.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="block-accordion">
        <Accordion
          classTag="accordion-lodging"
          title="Description"
          content={product.description}
        />
        <Accordion
          classTag="accordion-lodging"
          title="Équipements"
          list={product.equipments}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Lodging;

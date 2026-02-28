import type { FC } from "react";
import { aboutCards } from "@/data/about";
import AboutCard from "./AboutCard";

const AboutCards: FC = () => (
  <div className="about-cards">
    {aboutCards.map((card) => (
      <AboutCard key={card.title} title={card.title} items={card.items} />
    ))}
  </div>
);

export default AboutCards;

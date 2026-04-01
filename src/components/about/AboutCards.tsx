import type { FC, ReactNode } from "react";
import { aboutCards } from "@/data/about";
import AboutCard from "./AboutCard";

interface AboutCardsProps {
  children?: ReactNode;
}

const AboutCards: FC<AboutCardsProps> = ({ children }) => (
  <div className="about-cards">
    {children}
    {aboutCards.map((card) => (
      <AboutCard key={card.title} title={card.title} items={card.items} />
    ))}
  </div>
);

export default AboutCards;

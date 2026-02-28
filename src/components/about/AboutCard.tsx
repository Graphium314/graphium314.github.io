import type { FC } from "react";

interface AboutCardProps {
  title: string;
  items: readonly string[];
}

const AboutCard: FC<AboutCardProps> = ({ title, items }) => (
  <div className="about-card">
    <h3>{title}</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default AboutCard;

import type { FC } from "react";
import { aboutAffiliation } from "@/data/about";

const AboutAffiliation: FC = () => (
  <div className="about-affiliation">
    {aboutAffiliation.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);

export default AboutAffiliation;

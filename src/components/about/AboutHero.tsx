import type { FC } from "react";
import { aboutHero } from "@/data/about";
import SocialLinks from "./SocialLinks";

const AboutHero: FC = () => (
  <div className="about-hero">
    <div className="about-avatar">
      <img src={aboutHero.avatarSrc} alt="" />
    </div>
    <div className="about-hero-body">
      <p className="about-name">{aboutHero.name}</p>
      <SocialLinks />
      <div className="atcoder-badge">
        <a
          href={`https://atcoder.jp/users/${aboutHero.atcoder.username}`}
          target="_blank"
          rel="noopener noreferrer"
          title={aboutHero.atcoder.username}
        >
          <img src={aboutHero.atcoder.badgeUrl} alt="AtCoder" />
        </a>
      </div>
    </div>
  </div>
);

export default AboutHero;

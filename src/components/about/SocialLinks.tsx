import type { FC } from "react";
import { aboutHero } from "@/data/about";

const SocialLinks: FC = () => (
  <div className="social-links">
    {aboutHero.socialLinks.map(({ href, ariaLabel, iconSrc }) => (
      <a key={href} href={href} aria-label={ariaLabel}>
        <img src={iconSrc} width={24} height={24} alt="" />
      </a>
    ))}
  </div>
);

export default SocialLinks;

import type { FC } from "react";
import Image from "next/image";
import { aboutHero } from "@/data/about";

const SocialLinks: FC = () => (
  <div className="social-links">
    {aboutHero.socialLinks.map(({ href, ariaLabel, iconSrc }) => (
      <a key={href} href={href} aria-label={ariaLabel}>
        <Image src={iconSrc} width={24} height={24} alt={`${ariaLabel}アイコン`} />
      </a>
    ))}
  </div>
);

export default SocialLinks;

export const aboutHero = {
  avatarSrc: "/GraphiumIcon.png",
  name: "Graphium",
  socialLinks: [
    { href: "https://x.com/graphium142857", ariaLabel: "X", iconSrc: "/icons/x.svg" },
    { href: "https://github.com/Graphium314", ariaLabel: "GitHub", iconSrc: "/icons/github.svg" },
    { href: "https://misskey.io/@graphium142857", ariaLabel: "Misskey", iconSrc: "/icons/misskey_io.svg" },
    { href: "https://graphium314.hatenablog.com", ariaLabel: "はてなブログ", iconSrc: "/icons/hatenablog.svg" },
  ],
  atcoder: {
    username: "Graphium314",
    badgeUrl:
      "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FGraphium314",
  },
} as const;

export const aboutAffiliation = [
  "東京大学大学院 情報理工学系研究科 数理情報学専攻 修士課程",
  "東京大学アマチュア無線クラブ",
] as const;

export const aboutHistory = [
  "2026年4月-現在 東京大学 情報理工学系研究科 数理情報学専攻",
  "2024年4月-2026年3月 東京大学 工学部 計数工学科 数理情報工学コース",
  "2022年4月-2024年3月 東京大学 理科一類",
  "-2022年3月 長崎県立佐世保北高等学校",
] as const;

export const aboutCards = [
  {
    title: "コールサイン",
    items: ["JF6CDE", "AK6RG"],
  },
  {
    title: "資格",
    items: [
      "応用情報技術者",
      "第一級アマチュア無線技士",
      "第一級陸上無線技術士",
      "FCC Amateur Extra",
      "潜水士",
      "小型船舶操縦免許 1級",
    ],
  },
] as const;

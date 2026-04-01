import type { FC } from "react";
import { aboutHistory } from "@/data/about";

const AboutHistory: FC = () => (
  <div className="about-card history-card">
    <h3>経歴</h3>
    <div className="history-grid">
      {aboutHistory.map((entry, index) => {
        const [period, ...rest] = entry.split(" ");
        const detail = rest.join(" ");

        return (
          <div key={`${entry}-${index}`} className="history-row">
            <div className="history-period">{period}</div>
            <div className="history-detail">{detail}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default AboutHistory;

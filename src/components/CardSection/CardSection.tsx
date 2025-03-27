import type React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type CardSectionProps = {
  title: string;
  icon: IconDefinition;
  children: React.ReactNode;
  className?: string;
};

export default function CardSection({
  title,
  icon,
  children,
  className = ""
}: CardSectionProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
}

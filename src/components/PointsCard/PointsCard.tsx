import { faGift } from "@fortawesome/free-solid-svg-icons";
import CardSection from "../CardSection/CardSection";

type PointsCardProps = {
  points: string;
};

export default function PointsCard({ points }: PointsCardProps) {
  return (
    <CardSection title="Daily Points" icon={faGift}>
      <p className="points-amount">{points}</p>
    </CardSection>
  );
}

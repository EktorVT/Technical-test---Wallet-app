import { faCalendarAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardSection from "../CardSection/CardSection";

type PaymentCardProps = {
  title: string;
  subtitle: string;
};

export default function PaymentCard({ title, subtitle }: PaymentCardProps) {
  return (
    <CardSection
      title="No Payment Due"
      icon={faCalendarAlt}
      className="payment-due-card"
    >
      <div className="payment-content">
        <div className="check-circle">
          <FontAwesomeIcon
            icon={faCheck}
            size="2x"
            style={{ color: "#22c55e" }}
          />
        </div>
        <h2 className="payment-title">{title}</h2>
        <p className="payment-subtitle">{subtitle}</p>
      </div>
    </CardSection>
  );
}

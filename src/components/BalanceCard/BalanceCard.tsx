import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import CardSection from "../CardSection/CardSection";

type BalanceCardProps = {
  balance: number;
  maxLimit: number;
};

export default function BalanceCard({ balance, maxLimit }: BalanceCardProps) {
  const available = maxLimit - balance;

  const percentUsed = (balance / maxLimit) * 100;

  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <CardSection title="Card Balance" icon={faCreditCard}>
      <p className="balance-amount">{formatCurrency(balance)}</p>
      <p className="balance-subtitle">{formatCurrency(available)} Available</p>

      <div className="credit-info">
        <div className="credit-row">
          <span>Credit Limit</span>
          <span>{formatCurrency(maxLimit)}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentUsed}%` }}
          ></div>
        </div>
      </div>
    </CardSection>
  );
}

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarAlt,
  faClock,
  faInfoCircle,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import "../WalletHome/WalletHome.css";

type Transaction = {
  id: string;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  icon: string;
};

type TransactionDetailProps = {
  transactionId: string;
  transactions: Transaction[];
  onBack: () => void;
};

export default function TransactionDetail({
  transactionId,
  transactions,
  onBack
}: TransactionDetailProps) {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    const foundTransaction = transactions.find((tx) => tx.id === transactionId);
    if (foundTransaction) {
      setTransaction(foundTransaction);
    }
  }, [transactionId, transactions]);

  if (!transaction) {
    return (
      <div className="transaction-detail-loading">
        Loading transaction details...
      </div>
    );
  }

  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getRandomDarkColor = () => {
    const colors = [
      "#1e3a8a", // dark blue
      "#1e40af", // indigo
      "#312e81", // purple
      "#4c1d95", // violet
      "#831843", // pink
      "#9f1239", // rose
      "#7f1d1d", // red
      "#7c2d12", // orange
      "#3f6212", // lime
      "#064e3b", // emerald
      "#134e4a", // teal
      "#164e63", // cyan
      "#0c4a6e", // light blue
      "#374151" // gray
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="transaction-detail-container">
      <div className="transaction-detail-header">
        <button className="back-button" onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <h1>Transaction Details</h1>
      </div>

      <div className="transaction-detail-card">
        <div className="transaction-detail-summary">
          <div
            className="transaction-detail-icon"
            style={{ backgroundColor: getRandomDarkColor() }}
          ></div>
          <div className="transaction-detail-main">
            <h2>{transaction.name}</h2>
            <p className="transaction-detail-description">
              {transaction.description}
            </p>
            <p
              className={`transaction-detail-amount ${
                transaction.type === "payment" ? "payment" : "credit"
              }`}
            >
              {transaction.type === "payment" ? "-" : ""}
              {formatCurrency(transaction.amount)}
            </p>
            {transaction.pending && (
              <div className="transaction-detail-pending">
                <span className="pending-badge-large">Pending</span>
                <p>This transaction has not been posted to your account yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="transaction-detail-info">
          <div className="detail-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="detail-icon" />
            <div>
              <h3>Date</h3>
              <p>{formatFullDate(transaction.date)}</p>
            </div>
          </div>

          <div className="detail-item">
            <FontAwesomeIcon icon={faTag} className="detail-icon" />
            <div>
              <h3>Category</h3>
              <p>{transaction.type === "payment" ? "Payment" : "Purchase"}</p>
            </div>
          </div>

          <div className="detail-item">
            <FontAwesomeIcon icon={faInfoCircle} className="detail-icon" />
            <div>
              <h3>Status</h3>
              <p>{transaction.pending ? "Pending" : "Posted"}</p>
            </div>
          </div>

          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} className="detail-icon" />
            <div>
              <h3>Transaction ID</h3>
              <p>{transaction.id}</p>
            </div>
          </div>
        </div>

        <div className="transaction-detail-actions">
          <button className="action-button">Report an Issue</button>
        </div>
      </div>
    </div>
  );
}

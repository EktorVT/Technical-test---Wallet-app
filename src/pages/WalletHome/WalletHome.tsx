import { useState } from "react";
import "./WalletHome.css";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import PointsCard from "../../components/PointsCard/PointsCard";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import TransactionsCard from "../../components/TransactionCard/TransactionCard";
import walletData from "../../data/wallet-data.json";

export default function WalletHome() {
  const [data] = useState(walletData);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null);

  const handleSelectTransaction = (id: string) => {
    setSelectedTransactionId(id);
  };

  const handleBackToWallet = () => {
    setSelectedTransactionId(null);
  };

  if (selectedTransactionId) {
    return (
      <TransactionDetail
        transactionId={selectedTransactionId}
        transactions={data.transactions}
        onBack={handleBackToWallet}
      />
    );
  }

  return (
    <main className="wallet-container">
      <div className="wallet-grid">
        <div className="left-column">
          <BalanceCard balance={data.balance} maxLimit={data.maxLimit} />
          <PointsCard points={data.points} />
        </div>

        <div className="right-column">
          <PaymentCard
            title={data.paymentTitle}
            subtitle={data.paymentSubtitle}
          />
        </div>
      </div>

      <div className="transactions-section">
        <TransactionsCard
          transactions={data.transactions}
          onSelectTransaction={handleSelectTransaction}
        />
      </div>
    </main>
  );
}

import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import CardSection from "../CardSection/CardSection";
import TransactionItem from "../TransactionItem/TransactionItem";

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

type TransactionsCardProps = {
  transactions: Transaction[];
  onSelectTransaction: (id: string) => void;
};

export default function TransactionsCard({
  transactions,
  onSelectTransaction
}: TransactionsCardProps) {
  return (
    <CardSection
      title="Latest Transactions"
      icon={faReceipt}
      className="transactions-card"
    >
      <div className="transactions-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            name={transaction.name}
            description={transaction.description}
            date={transaction.date}
            pending={transaction.pending}
            icon={transaction.icon}
            onSelect={onSelectTransaction}
          />
        ))}
      </div>
    </CardSection>
  );
}

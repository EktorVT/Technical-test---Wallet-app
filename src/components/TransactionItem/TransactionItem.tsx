type TransactionItemProps = {
  id: string;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  icon: string;
  onSelect: (id: string) => void;
};

export default function TransactionItem({
  id,
  type,
  amount,
  name,
  description,
  date,
  pending,
  icon,
  onSelect
}: TransactionItemProps) {
  // Format currency
  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const transactionDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - transactionDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 7) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return days[transactionDate.getDay()];
    } else {
      return transactionDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      });
    }
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

  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className="transaction-item" onClick={handleClick}>
      <div
        className="transaction-icon"
        style={{ backgroundColor: getRandomDarkColor() }}
      ></div>

      <div className="transaction-details">
        <div className="transaction-top">
          <span className="transaction-name">{name}</span>
          <span
            className={`transaction-amount ${
              type === "payment" ? "payment" : "credit"
            }`}
          >
            {type === "payment" ? "-" : ""}
            {formatCurrency(amount)}
          </span>
        </div>

        <div className="transaction-bottom">
          <span className="transaction-description">
            {pending && <span className="pending-badge">Pending</span>}
            {description}
          </span>
          <span className="transaction-date">{formatDate(date)}</span>
        </div>
      </div>
    </div>
  );
}

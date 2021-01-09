import React from "react";
import PropTypes from "prop-types";
import "./TransactionHistory.css";

function TransactionHistory({ items }) {
  return (
    <table className="Transaction-history">
      <thead className="Transaction-history__table-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((transaction) => (
        <tbody key={transaction.id} className="Transaction-history__table-body">
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
};

export default TransactionHistory;

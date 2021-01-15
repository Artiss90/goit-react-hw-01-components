import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((transaction) => (
        <tbody key={transaction.id} className={style.tableBody}>
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

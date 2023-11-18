import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = props => {
  const { deleteTransaction } = useContext(GlobalContext);

  const isTransactionNegative = props.transaction.amount < 0;
  const sign = isTransactionNegative ? '-' : '+';

  return (
    <li className={isTransactionNegative ? 'minus' : 'plus'}>
        { props.transaction.text } <span>{ sign }${ Math.abs(props.transaction.amount) }</span>
        <button className="delete-btn" onClick={() => deleteTransaction(props.transaction.id)}>x</button>
    </li>
  );
};

export default Transaction;
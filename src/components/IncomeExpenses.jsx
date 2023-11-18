import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const incomeList = amounts.filter(amount => amount > 0)
  const expenseList = amounts.filter(amount => amount <= 0)
  const income = incomeList.reduce((a, b) => a + b).toFixed(2);
  const expense = Math.abs(expenseList.reduce((a, b) => a + b)).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${ income }</p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${ expense }</p>
        </div>
    </div>
  );
};

export default IncomeExpenses;
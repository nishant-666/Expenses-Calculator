
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas} from '../utils/format'
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? 'You Spent ' : 'You Earned';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}₹{numberWithCommas(Math.abs(transaction.amount))}</span>
      
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  )
}

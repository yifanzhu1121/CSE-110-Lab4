import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import ExpenseItem from './ExpenseItem';
import { fetchExpenses } from '../../utils/expense-utils';

const ExpenseList: React.FC = () => {
  const { expenses, setExpenses } = useAppContext();

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const expenseList = await fetchExpenses();
        setExpenses(expenseList);
      } catch (error) {
        console.error("Failed to load expenses:", error);
      }
    };
    loadExpenses();
  }, [setExpenses]);

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseList;


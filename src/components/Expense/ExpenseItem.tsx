import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { deleteExpense } from '../../utils/expense-utils';

interface ExpenseItemProps {
  id: string;
  description: string;
  cost: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, description, cost }) => {
  const { setExpenses } = useAppContext();

  const handleDelete = async () => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  return (
    <div>
      <span>{description} - ${cost}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;


import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { createExpense } from '../../utils/expense-utils';

const AddExpenseForm: React.FC = () => {
  const { setExpenses } = useAppContext();
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = { id: Date.now().toString(), description, cost };
    try {
      const savedExpense = await createExpense(newExpense);
      setExpenses((prev) => [...prev, savedExpense]); // Update the state with the saved expense from the server
      setDescription('');
      setCost(0);
    } catch (error) {
      console.error("Failed to create expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(Number(e.target.value))}
        placeholder="Cost"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;

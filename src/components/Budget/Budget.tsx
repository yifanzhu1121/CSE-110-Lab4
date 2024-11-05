import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchBudget, updateBudget } from '../utils/budget-utils';

const Budget: React.FC = () => {
  const { budget, setBudget } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  useEffect(() => {
    const loadBudget = async () => {
      try {
        const fetchedBudget = await fetchBudget();
        setBudget(fetchedBudget);
      } catch (error) {
        console.error("Failed to fetch budget:", error);
      }
    };
    loadBudget();
  }, [setBudget]);

  const handleSave = async () => {
    try {
      const updatedBudget = await updateBudget(newBudget);
      setBudget(updatedBudget);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update budget:", error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(Number(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>Budget: ${budget}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Budget;

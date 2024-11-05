import { API_BASE_URL } from "../constants/constants";

// Function to fetch the budget from the backend (GET)
export const fetchBudget = async (): Promise<number> => {
  const response = await fetch(`${API_BASE_URL}/budget`);
  if (!response.ok) throw new Error("Failed to fetch budget");
  const data = await response.json();
  return data.budget;
};

// Function to update the budget in the backend (PUT)
export const updateBudget = async (newBudget: number): Promise<number> => {
  const response = await fetch(`${API_BASE_URL}/budget`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: newBudget }),
  });
  if (!response.ok) throw new Error("Failed to update budget");
  const data = await response.json();
  return data.budget;
};

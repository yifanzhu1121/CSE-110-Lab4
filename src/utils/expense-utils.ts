import { API_BASE_URL } from "../constants/constants";
import { Expense } from "../types/types";

// Function to create an expense in the backend (POST)
export const createExpense = async (expense: Expense): Promise<Expense> => {
  const response = await fetch(`${API_BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  if (!response.ok) throw new Error("Failed to create expense");
  return response.json();
};

// Function to delete an expense in the backend (DELETE)
export const deleteExpense = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete expense");
};

// Function to fetch all expenses from the backend (GET)
export const fetchExpenses = async (): Promise<Expense[]> => {
  const response = await fetch(`${API_BASE_URL}/expenses`);
  if (!response.ok) throw new Error("Failed to fetch expenses");
  const jsonResponse = await response.json();
  return jsonResponse.data;
};

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Placeholder data for expenses
let expenses = [];

// Endpoint to get all expenses
app.get('/expenses', (req, res) => {
  res.json({ data: expenses });
});

// Endpoint to add a new expense
app.post('/expenses', (req, res) => {
  const newExpense = req.body;
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// Endpoint to delete an expense by ID
app.delete('/expenses/:id', (req, res) => {
  const { id } = req.params;
  expenses = expenses.filter(expense => expense.id !== id);
  res.status(204).send();
});

// Endpoint to update the budget (for simplicity, assume a single budget)
let budget = 1000;
app.put('/budget', (req, res) => {
  budget = req.body.amount;
  res.json({ budget });
});

app.get('/budget', (req, res) => {
  res.json({ budget });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

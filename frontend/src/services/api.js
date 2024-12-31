// src/services/api.js

const API_URL = 'http://localhost:5000'; 

// Fetch invoices created today
export const getTodayInvoices = async () => {
  const response = await fetch(`${API_URL}/invoices`);
  if (!response.ok) throw new Error('Failed to fetch invoices');
  return response.json();
};

// Send selected invoices for fiscalization
export const processFiscalization = async (selectedInvoices) => {
  const response = await fetch(`${API_URL}/process_invoices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ selected_invoices: selectedInvoices }),
  });

  if (!response.ok) throw new Error('Failed to fiscalize invoices');
  return response.json();
};

// src/components/InvoiceTable.js

import React, { useState, useEffect } from 'react';
import { getTodayInvoices } from '../services/api';

const InvoiceTable = ({ onInvoiceSelect }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getTodayInvoices();
        setInvoices(data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

  const handleCheckboxChange = (invoiceId, isChecked) => {
    onInvoiceSelect(invoiceId, isChecked);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Invoice Number</th>
          <th>Customer Name</th>
          <th>Total Amount</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(invoice.id, e.target.checked)
                }
              />
            </td>
            <td>{invoice.invoice_number}</td>
            <td>{invoice.customer_name}</td>
            <td>{invoice.total_amount}</td>
            <td>{invoice.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;

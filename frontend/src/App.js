// src/App.js

import React, { useState } from 'react';
import InvoiceTable from './components/InvoiceTable';
import InvoiceActions from './components/InvoiceActions';

const App = () => {
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  const handleInvoiceSelect = (invoiceId, isSelected) => {
    setSelectedInvoices((prevSelectedInvoices) =>
      isSelected
        ? [...prevSelectedInvoices, invoiceId]
        : prevSelectedInvoices.filter((id) => id !== invoiceId)
    );
  };

  return (
    <div>
      <h1>Invoices</h1>
      <InvoiceTable onInvoiceSelect={handleInvoiceSelect} />
      <InvoiceActions selectedInvoices={selectedInvoices} />
    </div>
  );
};

export default App;

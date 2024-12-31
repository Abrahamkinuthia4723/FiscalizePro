// src/components/InvoiceActions.js

import React, { useState } from 'react';
import { processFiscalization } from '../services/api';

const InvoiceActions = ({ selectedInvoices }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFiscalize = async () => {
    if (selectedInvoices.length === 0) {
      alert('Please select at least one invoice!');
      return;
    }

    try {
      setIsProcessing(true);
      const response = await processFiscalization(selectedInvoices);
      console.log('Fiscalization successful:', response);
      alert('Invoices successfully fiscalized!');
    } catch (error) {
      console.error('Error fiscalizing invoices:', error);
      alert('Failed to fiscalize invoices.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <button onClick={handleFiscalize} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Fiscalize Selected Invoices'}
      </button>
    </div>
  );
};

export default InvoiceActions;

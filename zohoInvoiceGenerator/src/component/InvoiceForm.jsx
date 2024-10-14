import React from "react";
import '../App.css'; // Import the styles

const InvoiceForm = ({ invoiceData, updateInvoiceData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateInvoiceData({ ...invoiceData, [name]: value });
  };

  return (
    <div>
      <h2>Invoice Details</h2>
      <form>
        <div>
          <label htmlFor="invoiceNumber">Invoice Number:</label>
          <input
            id="invoiceNumber"
            type="text"
            name="invoiceNumber"
            value={invoiceData.invoiceNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="clientName">Client Name:</label>
          <input
            id="clientName"
            type="text"
            name="clientName"
            value={invoiceData.clientName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="clientAddress">Client Address:</label>
          <input
            id="clientAddress"
            type="text"
            name="clientAddress"
            value={invoiceData.clientAddress}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={invoiceData.date}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;

import React, { useState, useRef } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceTable from "./InvoiceTable";
import { useReactToPrint } from "react-to-print";
import '../App.css';

const InvoiceGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    clientName: "",
    clientAddress: "",
    date: "",
    items: [],
    taxRate: 0,
  });

  // Create a ref for the invoice preview section
  const invoiceRef = useRef();

  const updateInvoiceData = (data) => setInvoiceData(data);

  // Setup the print functionality using the ref
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  return (
    <div className="container">
      <h1>Invoice Generator</h1>
      <InvoiceForm invoiceData={invoiceData} updateInvoiceData={updateInvoiceData} />
      <InvoiceTable invoiceData={invoiceData} updateInvoiceData={updateInvoiceData} />
      <button className="print-button" onClick={handlePrint}>Print Invoice</button>
      
      {/* Attach the ref to the invoice preview section */}
      <div id="invoice-preview" className="invoice-preview" ref={invoiceRef}>
        <h2>Invoice Preview</h2>
        <p>Client: {invoiceData.clientName}</p>
        <p>Address: {invoiceData.clientAddress}</p>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="invoice-totals">
          <p>Subtotal: {invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0)}</p>
          <p>Tax: {(invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0) * invoiceData.taxRate) / 100}</p>
          <p>Total: {(invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0) * (1 + invoiceData.taxRate / 100)).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;

import React from "react"
import '../App.css';

const InvoiceTable = ({ invoiceData, updateInvoiceData }) => {
  const handleItemChange = (index, field, value) => {
    const newItems = [...invoiceData.items];
    newItems[index][field] = value;
    updateInvoiceData({ ...invoiceData, items: newItems });
  };

  const addItem = () => {
    updateInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: "", quantity: 1, price: 0 }],
    });
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    updateInvoiceData({ ...invoiceData, items: newItems });
  };

  return (
    <div>
      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, "description", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, "price", e.target.value)}
                />
              </td>
              <td>{(item.quantity * item.price).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default InvoiceTable;

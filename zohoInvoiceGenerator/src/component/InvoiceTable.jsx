import React from "react";
import {
  Box,
  Button,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Text,
  HStack,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

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
    <Box mt={6}>
      <Text fontSize="2xl" mb={4}>
        Items
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Amount</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invoiceData.items.map((item, index) => (
            <Tr key={index}>
              <Td>
                <Input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(index, "description", e.target.value)
                  }
                  size="sm"
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                  size="sm"
                  min={1}
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                  size="sm"
                />
              </Td>
              <Td>{(item.quantity * item.price).toFixed(2)}</Td>
              <Td>
                <IconButton
                  icon={<MinusIcon />}
                  onClick={() => removeItem(index)}
                  colorScheme="red"
                  size="sm"
                  aria-label="Remove item"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <HStack spacing={4} mt={4} justify="flex-end">
        <Button onClick={addItem} leftIcon={<AddIcon />} colorScheme="green">
          Add Item
        </Button>
      </HStack>
    </Box>
  );
};

export default InvoiceTable;

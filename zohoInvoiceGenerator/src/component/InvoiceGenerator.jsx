import React, { useState, useRef } from "react";
import { Box, Button, VStack, Text, Table, Thead, Tbody, Tr, Th, Td, Heading } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import InvoiceForm from "./InvoiceForm";
import InvoiceTable from "./InvoiceTable";

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
    <Box p={6} maxWidth="1200px" mx="auto">
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Invoice Generator
      </Heading>

      <VStack spacing={6} align="stretch">
        <InvoiceForm invoiceData={invoiceData} updateInvoiceData={updateInvoiceData} />
        <InvoiceTable invoiceData={invoiceData} updateInvoiceData={updateInvoiceData} />

        <Button colorScheme="blue" onClick={handlePrint} width="200px" alignSelf="center">
          Print Invoice
        </Button>

        {/* Invoice Preview Section */}
        <Box
          ref={invoiceRef}
          p={6}
          mt={6}
          borderWidth={1}
          borderRadius="md"
          boxShadow="sm"
          bg="gray.50"
        >
          <Heading as="h2" size="lg" mb={4}>
            Invoice Preview
          </Heading>
          <Text fontSize="lg">
            <strong>Client:</strong> {invoiceData.clientName}
          </Text>
          <Text fontSize="lg">
            <strong>Address:</strong> {invoiceData.clientAddress}
          </Text>

          <Table mt={4} variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoiceData.items.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.description}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>{item.price}</Td>
                  <Td>{(item.quantity * item.price).toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* Totals Section */}
          <Box mt={4} p={4} borderWidth={1} borderRadius="md" bg="white">
            <Text fontSize="lg">
              <strong>Subtotal:</strong> 
              {invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)}
            </Text>
            <Text fontSize="lg">
              <strong>Tax:</strong> 
              {(
                invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0) * invoiceData.taxRate
              ).toFixed(2)}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              <strong>Total:</strong> 
              {(
                invoiceData.items.reduce((sum, item) => sum + item.quantity * item.price, 0) *
                (1 + invoiceData.taxRate / 100)
              ).toFixed(2)}
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default InvoiceGenerator;

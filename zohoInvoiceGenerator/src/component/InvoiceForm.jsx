import React from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const InvoiceForm = ({ invoiceData, updateInvoiceData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateInvoiceData({ ...invoiceData, [name]: value });
  };

  return (
    <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md" width="400px" mx="auto">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Invoice Details</h2>
      <form>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel htmlFor="invoiceNumber">Invoice Number:</FormLabel>
            <Input
              id="invoiceNumber"
              type="text"
              name="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="clientName">Client Name:</FormLabel>
            <Input
              id="clientName"
              type="text"
              name="clientName"
              value={invoiceData.clientName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="clientAddress">Client Address:</FormLabel>
            <Input
              id="clientAddress"
              type="text"
              name="clientAddress"
              value={invoiceData.clientAddress}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="date">Date:</FormLabel>
            <Input
              id="date"
              type="date"
              name="date"
              value={invoiceData.date}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button colorScheme="blue" width="full" mt={4} type="submit">
            Save Invoice
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default InvoiceForm;

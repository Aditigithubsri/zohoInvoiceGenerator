import React from "react";
import { ChakraProvider } from "@chakra-ui/react"; 
import InvoiceGenerator from "./component/InvoiceGenerator"; 

function App() {
  return (
    <ChakraProvider> 
      <div className="App">
        <InvoiceGenerator />
      </div>
    </ChakraProvider>
  );
}

export default App;

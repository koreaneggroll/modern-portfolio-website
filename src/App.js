import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Page from './Components/Page';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider className="App" theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

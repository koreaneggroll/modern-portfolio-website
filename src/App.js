import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Page from './Components/Page';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Page />
    </ChakraProvider>
  );
}

export default App;

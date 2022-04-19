import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Page from './Components/Page';
import Aboutme from './Components/AboutMe';

function App() {
  return (
    <ChakraProvider className="App" theme={theme}>
      <Page />
    </ChakraProvider>
  );
}

export default App;

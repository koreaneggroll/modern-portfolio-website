import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TopBar from './Components/TopBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="TopBar">
            <TopBar />
      </Box>
    </ChakraProvider>
  );
}

export default App;

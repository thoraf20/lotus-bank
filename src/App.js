import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <BrowserRouter>
      <Switch>
         <Route path="/">
            <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
             <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
           <VStack spacing={8}>

           </VStack>
           </Grid>
         </Box>
    </ChakraProvider>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

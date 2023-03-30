import { Box,Tabs,Tab,TabList,TabPanels,TabPanel,Button } from '@chakra-ui/react';
import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import CoordBills from '../components/CoordBills';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'




function Chat() {
  return (
    <Box>
      <Box h="630px" bg="red.100">
   <Tabs >
  <TabList justifyContent={'space-around'}>
    <Tab w="150px">Queued</Tab>
    <Tab w="150px">Pending</Tab>
    <Tab w="150px">Done</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <CoordBills />
    </TabPanel>
    <TabPanel>
    <CoordBills />
    </TabPanel>
    <TabPanel>
    <CoordBills />
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  <Link to="/addbill"><Button my={1} colorScheme="blue"   ml="67vw">Add Bill</Button></Link>
    </Box>
  
  );
}










export default Chat;

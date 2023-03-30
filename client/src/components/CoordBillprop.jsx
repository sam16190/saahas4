import { Button, Card, CardHeader, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
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
  

// function Billprop(props) {
//   return (
//  <Card my={2}>
   
//    <CardHeader>{props.billname}</CardHeader>

//  </Card>
   
//   )
// }









function CoordBillprop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
         <Card onClick={onOpen} my={2}>
   
   <CardHeader>{props.billname}</CardHeader>

 </Card>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Bill Name</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
           
               <div>Item Name : </div> 
                <div>Amount : XXXX</div> 
               <div> Proof :</div> 
            
                 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default CoordBillprop
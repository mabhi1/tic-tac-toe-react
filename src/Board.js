import {
  Badge,
  VStack,
  Box,
  HStack,
  Flex,
  Spacer,
  Button,
} from '@chakra-ui/react';
import Square from './Square';

function Board() {
  return (
    <Box overflow="hidden">
      <Flex>
        <Spacer />
        <Badge fontSize="0.7em" colorScheme="purple" mr="5">
          Next Turn : X
        </Badge>
        <Badge fontSize="0.7em" colorScheme="green">
          Winner is : X
        </Badge>
        <Spacer />
      </Flex>
      <Button m="5">Reset</Button>
      <Box mt="45">
        <VStack m="2">
          <HStack>
            <Square />
            <Square />
            <Square />
          </HStack>
        </VStack>
        <VStack m="2">
          <HStack>
            <Square />
            <Square />
            <Square />
          </HStack>
        </VStack>
        <VStack m="2">
          <HStack>
            <Square />
            <Square />
            <Square />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default Board;

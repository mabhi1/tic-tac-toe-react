import {
  Badge,
  VStack,
  Box,
  HStack,
  Flex,
  Spacer,
  Button,
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import Square from './Square';

function Board() {
  const [player, setPlayer] = useState('X');
  function switchPlayer() {
    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
  }
  return (
    <Box overflow="hidden">
      <Box>
        <Text mb="5" fontSize="35px" fontFamily="initial">
          Tic Tac Toe
        </Text>
        <VStack>
          <HStack>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square player={player} switchPlayer={switchPlayer} />
          </HStack>
        </VStack>
      </Box>
      <Flex mt="45">
        <Spacer />
        <Badge
          fontSize="0.7em"
          colorScheme="purple"
          mr="5"
          width="180px"
          padding="1"
        >
          Next Turn : X
        </Badge>
        <Badge fontSize="0.7em" colorScheme="green" width="180px" padding="1">
          Winner is : X
        </Badge>
        <Spacer />
      </Flex>
      <Button m="5" size="md" fontFamily="monospace">
        Reset
      </Button>
    </Box>
  );
}

export default Board;

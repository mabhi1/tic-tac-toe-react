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
  const [reset, setReset] = useState(false);
  let moves = {
    X: [],
    0: [],
  };
  const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  function switchPlayer() {
    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
  }
  function calculate(val) {
    moves[player].append(val);
  }
  return (
    <Box overflow="hidden">
      <Box>
        <Text mb="5" fontSize="35px" fontFamily="initial">
          Tic Tac Toe
        </Text>
        <VStack>
          <HStack>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
              onClick={() => calculate(1)}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square
              player={player}
              switchPlayer={switchPlayer}
              reset={reset}
              setReset={setReset}
              setPlayer={setPlayer}
            />
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
      <Button
        m="5"
        size="md"
        fontFamily="monospace"
        onClick={() => setReset(true)}
      >
        Reset
      </Button>
    </Box>
  );
}

export default Board;

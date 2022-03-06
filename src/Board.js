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
  const [win, setWin] = useState(false);
  const [moves, setMoves] = useState({
    X: [],
    0: [],
  });
  const [left, setLeft] = useState(true);
  const winner = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];
  let props = undefined;

  function switchPlayer() {
    if (player === 'X') {
      setPlayer('0');
    } else {
      setPlayer('X');
    }
    if (moves['X'].length + moves['0'].length === 9) {
      setLeft(false);
    }
  }
  function calculate(val) {
    let count = 0;
    moves[player].push(val);
    moves[player].sort();
    for (let i = 0; i < winner.length; i++) {
      for (let j = 0; j < winner[i].length; j++) {
        for (let k = 0; k < moves[player].length; k++) {
          if (winner[i][j] === moves[player][k]) {
            count += 1;
            break;
          }
        }
      }
      if (count >= 3) {
        setWin(true);
        break;
      } else {
        count = 0;
      }
    }
  }
  props = {
    player: player,
    switchPlayer: switchPlayer,
    reset: reset,
    setReset: setReset,
    setPlayer: setPlayer,
    calculate: calculate,
    setWin: setWin,
    setMoves: setMoves,
    win: win,
    setLeft: setLeft,
  };
  return (
    <Box overflow="hidden">
      <Box>
        <Text mb="5" fontSize="35px" fontFamily="initial">
          Tic Tac Toe
        </Text>
        <VStack>
          <HStack>
            <Square values={props} index="1" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="2" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="3" />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square values={props} index="4" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="5" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="6" />
          </HStack>
        </VStack>
        <Divider orientation="horizontal" mx="auto" width="180px" />
        <VStack>
          <HStack>
            <Square values={props} index="7" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="8" />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Square values={props} index="9" />
          </HStack>
        </VStack>
      </Box>
      <Flex mt="45">
        <Spacer />
        {win ? (
          <Badge fontSize="0.7em" colorScheme="green" width="180px" padding="1">
            Winner is : {player === 'X' ? '0' : 'X'}
          </Badge>
        ) : (
          <Badge
            fontSize="0.7em"
            colorScheme="purple"
            width="180px"
            padding="1"
          >
            {left ? 'Next Turn : ' + player : 'Draw! Press Reset'}
          </Badge>
        )}

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

import { Button } from '@chakra-ui/react';
import { useState } from 'react';

function Square(props) {
  const [turn, setTurn] = useState(undefined);
  function check() {
    if (turn === undefined) {
      setTurn(props.player);
      props.switchPlayer();
    } else {
      return;
    }
  }
  return <Button onClick={() => check()}>{turn}</Button>;
}

export default Square;

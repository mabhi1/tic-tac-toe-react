import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function Square(props) {
  const [turn, setTurn] = useState(undefined);
  useEffect(() => {
    function reset() {
      if (props.reset) {
        setTurn(undefined);
        props.setReset(false);
        props.setPlayer('X');
      }
    }
    reset();
  }, [props]);
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

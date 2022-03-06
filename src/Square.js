import { Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function Square(props) {
  const [turn, setTurn] = useState(undefined);
  useEffect(() => {
    function reset() {
      if (props.values.reset) {
        setTurn(undefined);
        props.values.setLeft(true);
        props.values.setReset(false);
        props.values.setPlayer('X');
        props.values.setWin(false);
        props.values.setMoves({
          X: [],
          0: [],
        });
      }
    }
    reset();
  }, [props]);
  function check() {
    if (turn === undefined && props.values.win === false) {
      props.values.calculate(props.index);
      setTurn(props.values.player);
      props.values.switchPlayer();
    } else {
      return;
    }
  }
  return <Button onClick={() => check()}>{turn}</Button>;
}

export default Square;

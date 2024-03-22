import '../styles/global.css';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [playerOneHealth, playerOneHealthChange] = useState(0);
  const [playerTwoHealth, playerTwoHealthChange] = useState(0);
  const changePlayerOneHealth = () => playerOneHealthChange((amount) => amount + 1);
  const changePlayerTwoHealth = () => playerTwoHealthChange((amount) => amount + 1);

  const dealPlayerDamage = (someValue) => playerOneHealthChange((amount) => amount - someValue);

  const [playerOneActive, playerOneActiveChange] = useState(false);
  const [playerTwoActive, playerTwoActiveChange] = useState(false);

    return <Component {...pageProps} 
      playerOneHealth={playerOneHealth}
      playerTwoHealth={playerTwoHealth}
      changePlayerOneHealth={changePlayerOneHealth}
      changePlayerTwoHealth={changePlayerTwoHealth}

      playerOneActive={playerOneActive}
      playerTwoActive={playerTwoActive}
      playerOneActiveChange={playerOneActiveChange}
      playerTwoActiveChange={playerTwoActiveChange}
    />;
  }
  
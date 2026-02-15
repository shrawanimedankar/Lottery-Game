import { useState, useEffect } from "react";
import { genTicket, winCondition } from "./helper";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";
import Confetti from "react-confetti";

export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const [hasWon, setHasWon] = useState(false);
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
    setHasWon(false); // reset confetti
  };

  useEffect(() => {
    if (isWinning) {
      setHasWon(true); // trigger confetti
    }
  }, [isWinning]);

  return (
    <div className="appContainer">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket} />
      {isWinning && (
        <h3>
          <i className="fa-solid fa-trophy"></i> Boom! You Won{" "}
          <i className="fa-solid fa-crown"></i>
        </h3>
      )}

      {hasWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
}

import TicketNum from "./TicketNum.jsx";
import "./index.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <span className="tickName">
        <i className="fa-solid fa-star"></i> TICKET{" "}
        <i className="fa-solid fa-star"></i>
      </span>
      <div className="numbers">
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </div>
  );
}

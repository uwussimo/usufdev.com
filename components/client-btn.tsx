"use client";
import { useState } from "react";

function ClientButton() {
  const [sum, setSum] = useState(0);

  const increment = () => {
    setSum(sum + 1);
  };

  return <button onClick={increment}>{sum}</button>;
}

export default ClientButton;

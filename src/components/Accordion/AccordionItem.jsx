import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ title, children, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionItem;

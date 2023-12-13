import React, { useState } from 'react';

const Accordion = () => {
  // Step 2: Create state to manage accordion visibility
  const [isAccordionOpen, setIsAccordionOpen] = useState(Array(3).fill(false));

  // Step 3: Toggle accordion visibility on click
  const toggleAccordion = (index) => {
    setIsAccordionOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div>
      {/* Step 1: Display every title of accordion with body */}
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            {/* Accordion Header */}
            <div
              style={{
                cursor: 'pointer',
                padding: '10px',
                border: '1px solid #ccc',
                marginBottom: '5px',
              }}
              onClick={() => toggleAccordion(index)}
            >
              Accordion {index + 1}
            </div>
            {/* Accordion Body - Conditionally rendered based on state */}
            {isAccordionOpen[index] && (
              <div style={{ padding: '10px', border: '1px solid #ccc' }}>
                Accordion Content {index + 1}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Accordion;

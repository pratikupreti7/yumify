import React, { useState } from 'react';

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleOpen}>{props.title}</button>
      {isOpen &&
        <div>{props.children}</div>
      }
    </div>
  );
}

export default Collapsible;

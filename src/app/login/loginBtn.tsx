"use client";

import { useState } from "react";

export default function LogInBtn() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setIsButtonVisible(false);
  };

  return (
    <div>
      {isButtonVisible ? (
        <button onClick={handleButtonClick}>Click me to hide</button>
      ) : (
        <p>버튼이 클릭되었습니다</p>
      )}
    </div>
  );
}

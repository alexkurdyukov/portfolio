import React, { useState } from "react";

const Popup = (setTrigger) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  return isPopupOpen ? (
    <div className="popup">
      <div className="popup__overlay"></div>
      <div className="popup__content"></div>
    </div>
  ) : (
    ""
  );
};

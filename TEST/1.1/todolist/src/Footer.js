import React from "react";

const Footer = ({ currentLanguage, setLanguage }) => {
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

    return (
      <div>
        <h3>Made by MindX 🔥</h3>
        <div value={currentLanguage} onClick={handleLanguage}>
            <span>Available on:</span>
            <span className="languague-picker" value="vn">🇻🇳</span>
            <span className="languague-picker selected" value="us">🇺🇸</span>
        </div>
      </div>
    );
};
  
export default Footer;
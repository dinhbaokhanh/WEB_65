import React from "react";

const Footer = (props) => {
    return (
      <div>
        <h3>Made by MindX 🔥</h3>
        <div>
          <span>Available on:</span>
          <span 
          className={`language-picker ${props.language === "vn" ? "selected" : " "}`}
          onClick={() => props.onLanguageChange('vn')}>
            🇻🇳
          </span>
          <span 
          className={`language-picker ${props.language === "us" ? "selected" : " "}`}
          onClick={() => props.onLanguageChange('us')}>
            🇺🇸
          </span>
        </div>
      </div> 
    );
};
  
export default Footer;
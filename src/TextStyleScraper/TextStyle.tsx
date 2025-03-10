import React from 'react';

interface TextStyleProps {
  styles: {
    element: string;
    fontFamily: string;
    fontSize: string;
    color: string;
    letterSpacing: string;
    fontWeight: string;
    lineHeight: string;
    text: string;
  }[];
}

const TextStyle: React.FC<TextStyleProps> = ({ styles }) => {
  return (
    <div className="text-style-container">
      {styles.map((style, index) => (
        <div key={index} className="style-card">
          <div className="style-header">
            <span className="element-tag">{style.element}</span>
            <span className="element-text">{style.text.substring(0, 50)}...</span>
          </div>
          <div className="style-details">
            <div className="style-row">
              <span className="style-label">Font Family:</span>
              <span className="style-value">{style.fontFamily}</span>
            </div>
            <div className="style-row">
              <span className="style-label">Font Size:</span>
              <span className="style-value">{style.fontSize}</span>
            </div>
            <div className="style-row">
              <span className="style-label">Color:</span>
              <span className="style-value">{style.color}</span>
            </div>
            <div className="style-row">
              <span className="style-label">Letter Spacing:</span>
              <span className="style-value">{style.letterSpacing}</span>
            </div>
            <div className="style-row">
              <span className="style-label">Font Weight:</span>
              <span className="style-value">{style.fontWeight}</span>
            </div>
            <div className="style-row">
              <span className="style-label">Line Height:</span>
              <span className="style-value">{style.lineHeight}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextStyle;





















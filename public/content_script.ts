function scrapeTextStyles() {
    const elements = document.querySelectorAll("body *"); // Select all elements
    const styles = [];
  
    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
  
      // Collect relevant style information
      const textStyle = {
        element: element.tagName,
        fontFamily: computedStyle.fontFamily,
        fontSize: computedStyle.fontSize,
        color: computedStyle.color,
        letterSpacing: computedStyle.letterSpacing,
        fontWeight: computedStyle.fontWeight,
        lineHeight: computedStyle.lineHeight,
      };
  
      // Only include elements with visible text
      if (element.textContent.trim()) {
        styles.push({ text: element.textContent.trim(), ...textStyle });
      }
    });
  
    return styles;
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "scrapeStyles") {
      const scrapedStyles = scrapeTextStyles();
      sendResponse(scrapedStyles);
    }
  });
  


document.getElementById("scrape").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeStyles" }, (response) => {
        const resultsDiv = document.getElementById("results");
        if (!response || response.length === 0) {
          resultsDiv.innerHTML = "<p>No text styles found on this page.</p>";
          return;
        }
  
        // Display the scraped styles
        resultsDiv.innerHTML = response
          .map(
            (style) => `
              <div>
                <h3>${style.text}</h3>
                <p>Font Family: ${style.fontFamily}</p>
                <p>Font Size: ${style.fontSize}</p>
                <p>Color: ${style.color}</p>
                <p>Letter Spacing: ${style.letterSpacing}</p>
                <p>Font Weight: ${style.fontWeight}</p>
                <p>Line Height: ${style.lineHeight}</p>
              </div>
            `
          )
          .join("");
      });
    });
  });
  
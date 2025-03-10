// import ContactScrapingUi from './contactScraper/ContactScrapUi';
import React, { useState } from 'react';
import TextStyle from './TextStyleScraper/TextStyle';
import './App.css';

interface TextStyleData {
  element: string;
  fontFamily: string;
  fontSize: string;
  color: string;
  letterSpacing: string;
  fontWeight: string;
  lineHeight: string;
  text: string;
}

function App() {
  const [styles, setStyles] = useState<TextStyleData[]>([]);
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    setLoading(true);
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab.id) {
        const response = await chrome.tabs.sendMessage(tab.id, { action: 'scrapeStyles' });
        setStyles(response.styles);
      }
    } catch (error) {
      console.error('Error scraping styles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Text Style Scraper</h1>
        <button 
          onClick={handleScrape}
          disabled={loading}
          className="scrape-button"
        >
          {loading ? 'Scraping...' : 'Scrape Styles'}
        </button>
      </header>
      <main>
        <TextStyle styles={styles} />
      </main>
    </div>
  );
}

export default App;

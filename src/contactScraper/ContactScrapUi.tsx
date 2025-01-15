import { useEffect, useState } from "react";

export default function ContactScrapingUi() {
  const [websiteTitle, setWebsiteTitle] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const [title] = tabs;
      setWebsiteTitle(title.title);
    });
  }, []);

  const handleCurrentTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // chrome.tabs.sendMessage(tabs[0].id, { action: "scrape" }, (response) => {})
    });
  };
  return (
    <div>
      <h1>Scrape contact from website</h1>

      <button className="border border-black" onClick={handleCurrentTab}>
        Get current window
      </button>
      <p className="text-xs font-bold">
        {!websiteTitle ? "this site does not have title " : websiteTitle}
      </p>
    </div>
  );
}

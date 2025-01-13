// Regular expressions for emails and phone numbers
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const phoneRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;

// Scrape emails and phone numbers from the webpage
function scrapeContactInfo() {
  const pageContent = document.body.innerText;
  const emails = pageContent.match(emailRegex) || [];
  const phoneNumbers = pageContent.match(phoneRegex) || [];

  return { emails, phoneNumbers };
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scrape") {
    const contacts = scrapeContactInfo();
    console.log(contacts, sender)
    sendResponse(contacts);
  }
});

// // src/content.ts;

// interface MessagePayload {
//     type: string;
//     payload: {
//       color: string;
//     };
//   }
// chrome.runtime.onMessage.addListener((message: MessagePayload, sender, sendResponse) => {
//   console.log('Message received:', sender);
//   if (message.type === 'CHANGE_BACKGROUND') {
//     const { color } = message.payload;
//     document.body.style.backgroundColor = color;
//     sendResponse({ success: true });
//   }
// });

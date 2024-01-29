// chrome.runtime.onConnect.addListener((e) => {
//     console.log('chrome.runtime.onConnect.addListener content')
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.dir('content', chrome.runtime.onMessage, request, sender, sendResponse);
//
//     // sendResponse({farewell: "goodbye 1"});
//     if (request.action === "addRuSuffix") {
//         const searchInput = document.querySelector('form[action="/search"] textarea[name="q"]');
//         if (searchInput) {
//             const currentValue = searchInput.value;
//             searchInput.value = currentValue + " -.ru";
//         }
//         // sendResponse({farewell: searchInput.value});
//     }
// });

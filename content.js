console.log("Chrome extension go");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
}


// function siteCheck(site,action) {
//     if (site == bad) {
//         console.log("Negative Site Detective")
//     }
// }
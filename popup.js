// popup.js
document.addEventListener('DOMContentLoaded', documentEvents, false);

function documentEvents() {
    let button = document.getElementById("button");
    button.addEventListener('click', async () => {
        let value = document.getElementById('userinput').value;
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            function: main,
            args: [value]
        })
    });
}

function main(value) {
    // value is the text got from the input field in the popup
    ASIN = document.getElementById("ASIN")
    if (ASIN !== null) {
        ASIN.setAttribute("value", value)
        document.getElementById('add-to-wishlist-button-submit').click()
        console.log("ASIN value changed.")
    } else {
        alert("This is not a valid Amazon page.\nYou can only run this extension in any Amazon product page.")
    }

};






let button = document.getElementById("button");

function main(value) {
    // Value is the text got from the input field in the popup
    ASIN = document.getElementById("ASIN")
    ASIN.setAttribute("value", value)
    document.getElementById('add-to-wishlist-button-submit').click()
    console.log("ASIN value changed.")
};


document.addEventListener('DOMContentLoaded', documentEvents, false);

function documentEvents() {
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





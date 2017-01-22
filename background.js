(function() {
        // Called when the user clicks on the browser action.
        chrome.browserAction.onClicked.addListener(function(tab) {
            chrome.tabs.executeScript(null, {
                file: "jquery.js"
            }, function() {
                chrome.tabs.executeScript(null, {
                    file: "framify.js"
                }, function() {
                    chrome.tabs.executeScript(null, {
                        file: "content.js"
                    });
                });
            });


        });
})();

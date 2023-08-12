chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "myContextMenu",
      title: "Click Me (V3)",
      contexts: ["page"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "myContextMenu") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: showAlert
      });
    }
  });
  
  function showAlert() {
    alert("Context menu item clicked (V3)!");
  }
  
function replaceText(node) {
    if (node.nodeType === 3) {
      node.textContent = node.textContent.replace(/¤/g, '₽');
    } else {
      for (let child of node.childNodes) {
        replaceText(child);
      }
    }
  }
  
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.nodeType === 1 || node.nodeType === 3) {
          replaceText(node);
        }
      }
    }
  });
  
  replaceText(document.body);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
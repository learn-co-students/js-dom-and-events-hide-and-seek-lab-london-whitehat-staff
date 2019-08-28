if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('#nested .target')
}

function deepChildOrSelf(node) {
  return node.children[0]
    ? deepChildOrSelf(node.children[0])
    : node
}

function deepestChild() {
  const grandNode = getFirstSelector('#grand-node')
  return deepChildOrSelf(grandNode)
}

function increaseRankBy(n) {
  const rankedListNodes = document.querySelectorAll('.ranked-list')
  for (const rankedList of rankedListNodes) {
    for (const liElement of Array.from(rankedList.children)) {
      liElement.innerHTML = parseInt(liElement.innerHTML) + parseInt(n)
    }
  }
}
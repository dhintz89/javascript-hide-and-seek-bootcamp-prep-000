function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (var i=0; i<rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i],10)+1).toString();
  }
}

function deepestChild() {
  
}
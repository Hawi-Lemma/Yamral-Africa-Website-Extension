(function() {

  init(); //on page load - show first slide, hidethe rest

function init() {

    guardian = document.getElementsByClassName('available-options');

    for (j = 0; j < guardian.length; j++) {
      var drops = guardian[j].getElementsByClassName("dropdowns");
      var opts = guardian[j].getElementsByClassName("output");
      drops[0].classList.add('active-drops');
      opts[0].classList.add('active-opts');
    }
  }
    
     opts = document.getElementsByClassName('output'); //opts functionality

//  for (i = 0; i < opts.length; i++) {
//
//    opts[i].onclick = function() {
//
//      drops = this.parentNode.parentNode.getElementsByClassName("dropdowns");
//
//      for (j = 0; j < this.parentNode.children.length; j++) {
//        this.parentNode.children[j].classList.remove('active-opts');
//        drops[j].classList.remove('active-drops');
//        if (this.parentNode.children[j] == this) {
//          index = j;
//        }
//      }
//      this.classList.add('active-opts');
//      drops[index].classList.add('active-drops');
//
//    }
//  }
})();
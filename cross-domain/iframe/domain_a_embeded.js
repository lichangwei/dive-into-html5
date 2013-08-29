(function(){
  var iframe = window.iframe = document.createElement('iframe');
  iframe.src = domain_a + path_to_root + '/domain_a_embeded.html';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  window.onWidthHeightChanged = function(w, h){
    var hash = w + ',' + h;
    iframe.src = domain_a + path_to_root + '/domain_a_embeded.html#' + hash;
  };
})();
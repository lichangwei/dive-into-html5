var domain_a_Embeded_obj = (function(){

  var iframe = window.iframe = document.createElement('iframe');
  iframe.src = domain_a + path_to_root + '/domain.a.embeded.html';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  var exports = {
    onWidthHeightChanged: function(width, height){
      var hash = width + ',' + height;
      iframe.src = domain_a + path_to_root + '/domain.a.embeded.html#' + hash;
    }
  };
  return exports;
})();
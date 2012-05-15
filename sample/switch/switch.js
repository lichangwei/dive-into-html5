$(function(){

$(document).delegate('.switch span', 'click', function(e){
	e.preventDefault();
	e.stopPropagation();
	this.parentNode.className = 'switch ' + this.className;
});
$(document).delegate('.switch .btn', 'mousedown', function(e){
	e.preventDefault();
	e.stopPropagation();
	var $this = $(this);
	var startX = e.clientX;
	var max = utils.getComputedWidth(this);
	var left = parseInt(utils.getComputedProperty(this, 'left')) || 0;
	var to;
	var isOff, _isOff;
	$this.bind('mousemove.switch', function(e){
		e.preventDefault();
		e.stopPropagation();
		to = left + e.clientX-startX;
		if( to < 0 ) to = 0;
		if( to > max ) to = max;
		$this.css('left', to + 'px');
		_isOff = left + e.clientX - startX > max/2;
		if( isOff === _isOff ) return;
		isOff = _isOff;
		this.parentNode.className = 'switch ' + (_isOff?'off':'on');
	})
	$this.bind('mouseup.switch, mouseleave.switch', function(e){
		e.preventDefault();
		e.stopPropagation();
		$this.unbind('.switch');
		this.style.left = '';
	});
});

});

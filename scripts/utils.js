var utils = {
	getComputedProperty: function(elem, attr){
		return window.getComputedStyle(elem).getPropertyValue(attr);
	},
	getComputedWidth: function(elem){
		var cs = window.getComputedStyle(elem);
		return parseInt( cs.getPropertyValue('margin-left') ) +
			parseInt( cs.getPropertyValue('border-left-width') ) +
			parseInt( cs.getPropertyValue('padding-left') ) +
			parseInt( cs.getPropertyValue('width') ) +
			parseInt( cs.getPropertyValue('padding-right') ) +
			parseInt( cs.getPropertyValue('border-right-width') ) +
			parseInt( cs.getPropertyValue('margin-right') );
	},
	findPosition: function( obj, parent ){
		var left =0, top = 0, op, key;
		while( op = obj.offsetParent ){
			left += obj.offsetLeft;
			top += obj.offsetTop;
			if( op === parent ) break;
			obj = op;
		}
		return [left, top];
	}
}

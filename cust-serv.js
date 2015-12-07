

var bodyClass = jQuery('body').attr('class');
console.log('bodyClass = ' + bodyClass);
var terms = bodyClass.indexOf('customer-service-terms-conditions');

if (jQuery('body.customer-service-terms-conditions').length > 0) {
	var loadStyle = '<style>\n'
	+ '@media screen and (-webkit-min-device-pixel-ratio:0) {\n'
	+ 'body.customer-service-terms-conditions p.new_indent {margin-top:0 !important;}\n'
	+ '}\n'
	+ '</style>';
	jQuery('body').append(loadStyle);
}



updateInseam = function() {
	var radioButton = jQuery(targetPage+'input:radio[name=cut]:checked');
	var cutID = jQuery(radioButton).attr('id');	
	if (cutID) {
			var cutNumber = cutID.replace('cut','');
			var inseamId = 'inseamFlag_'+cutNumber;
			var itemNumberId = 'desCode'+cutNumber;
			var itemNumber = jQuery(radioButton).attr('data-item-number');			
			var itemNumberValue = itemNumber.substring(itemNumber.length-4, itemNumber.length);
			if (itemNumberValue !="") {
					jQuery(targetPage+'input[name=item]').val(itemNumberValue);
					jQuery(targetPage+'input[name=itemNumber]').val(itemNumberValue);
			}
	}
	var inseamFlag = jQuery(targetPage+'input[name='+inseamId+']').val();	
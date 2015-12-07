	$('.tab-content .tab-content-container a.viewer').bind('click', function() {
		try {
			var productViewer = jQuery('.tab-content .tab-content-container a.viewer');
			var temp_id = "";
			if (typeof utag_data.product_id !== typeof undefined) {
				temp_id = utag_data.product_id;
				if (temp_id.length == 9) {
					var prod_id = temp_id.toString().substring(0, 5);
				} else {
					var prod_id = temp_id.toString().substring(0, 8);
				}
			}
			cmCreateElementTag('360', '"[' + prod_id + ']"');
		} catch(err){
			if(window.console) {
				console.log(err);
			}
		}
	});
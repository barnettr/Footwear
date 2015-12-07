<script type="text/javascript">
    jQuery(document).ready(function () {
        
        (function (jQuery) {
            var productViewer = jQuery('.tab-content .tab-content-container a.viewer');
            var temp_id = "";
            if (productViewer.hasClass('viewer')) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.text = "cmSetClientID('30000102',true,'data.coremetrics.com','eddiebauer.com');"
                document.body.appendChild(script);

                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "//libs.coremetrics.com/eluminate.js";
                document.body.appendChild(script);

                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = "#fbBox #fbContent {width: 850px !important;}";
                document.body.appendChild(style);

                if (typeof utag_data.product_id !== typeof undefined) {
                    temp_id = utag_data.product_id;
                    if (temp_id.length == 9) {
                        var prod_id = temp_id.toString().substring(0, 5);
                    } else {
                        var prod_id = temp_id.toString().substring(0, 8);
                    }
                }

                productViewer.on('click', function (e, object) {
                    var elementID = 360;
                    cmCreateElementTag('"' + elementID + '"', '"[' + prod_id + ']"');
                });
            };
        })(jQuery);
    });
</script>

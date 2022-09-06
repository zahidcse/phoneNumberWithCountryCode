<script>
                jQuery( document ).ready(function() {
                     $('.drop-down-country-list').click(function(){
                        $('.country-dropdown').show();
                        $('.drop-down-country-list').hide();
                        
                    })
                    
                    $('.country-phone-code').click(function(){
                        var pcode = $(this).attr('data-code');
                        var cname = $(this).attr('data-name');
                        $('#phone_code').val(pcode);
                        $('.drop-down-country-list').show();
                        $('.country-dropdown').hide();
                        $('.drop-down-country-list span').text(cname+' ('+pcode+')');
                        
                    })
                    
                    jQuery(".search-country").keyup(function () {
                        var filter = jQuery(this).val();
                        jQuery(".country-dropdown ul li").each(function () {
                            if (jQuery(this).text().search(new RegExp(filter, "i")) < 0) {
                                jQuery(this).hide();
                            } else {
                                jQuery(this).show()
                            }
                        });
                    });
                })

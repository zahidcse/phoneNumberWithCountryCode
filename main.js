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
                })

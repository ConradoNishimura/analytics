
(function ($) {
    "use strict";

    // Function to set a session cookie
    function setSessionCookie(name, value) {
        document.cookie = name + "=" + value + ";path=/";
    }

    // Example: Replace `userId` with the actual User ID variable
    const userId = "12345"; // Replace with dynamic User ID
    setSessionCookie("account_id", userId); // Cookie will last until the browser is closed


    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });

    //DataLayer Push
        /**dataLayer push evento de Page View 
         $(window).on('load', function(){
 //           if ($('footer').length) { // Assuming your footer has a <footer> tag
 //           var dataPageName = $('[data-page-name]').attr('data-page-name');
    
             dataLayer = [];
             dataLayer.push({
 //                'event': 'identification',
                 'userId': '12345678',
             })
 //        }else {
 //            console.warn("footer element not found");
 //        }
 })

        /**dataLayer push evento de Select Content */
        $(document).ready(function() {
            // Listen for clicks on any <a> element with data-gtm-type="click"
            $('a[data-gtm-type="click"], button[data-gtm-type="click"], div[data-gtm-type="click"]').on('click', function() {
                // Get the values of data-gtm-name and data-clicktype from the clicked element
                var gtmName = $(this).attr('data-gtm-name');
                var gtmClickType = $(this).attr('data-gtm-clicktype');
                var gtmType = $(this).attr('data-gtm-type');
                var gtmPage = $(this).attr('data-gtm-page');
        
                // Push to dataLayer
                dataLayer = dataLayer || [];  // Initialize dataLayer if it doesn't exist
                dataLayer.push({
                    'event': 'select_content',
                    'page_type': gtmPage,
                    'status_login': 'nao logado', //dev por favor retire
                    'interaction_detail': gtmName,
                    'ev_action': gtmType + ':' + gtmClickType + ':' + gtmName
                });
            });
        });

        /**dataLayer push evento de newsletter generate */
        $(document).ready(function() {
            // Listen for clicks on any <a> element with data-gtm-type="register"
            $('button[data-gtm-type="register"]').on('click', function() {
                // Get the values of data-gtm-name and data-clicktype from the clicked element
                var gtmName = $(this).attr('data-gtm-name');
                var clickType = $(this).attr('data-gtm-clicktype');
                var gtmType = $(this).attr('data-gtm-type');
                var gtmPage = $(this).attr('data-gtm-page');

        
                // Push to dataLayer
                dataLayer = dataLayer || [];  // Initialize dataLayer if it doesn't exist
                dataLayer.push({
                    'event': 'newsletter_generate',
                    'page_type': gtmPage,
                    'ev_action': gtmType + ':' + clickType + ':' + gtmName,
                    'status_login': 'nao-logado'
                });
            });
        });

        // $(document).ready(function() {

        //     // Listen for clicks on any <a> element with data-gtm-type="register"
        //     $('button[data-gtm-type="view"]').on('click', function() {
        //         // Get the values of data-gtm-name and data-clicktype from the clicked element
        //         var gtmName = $(this).attr('data-gtm-name');
        //         var clickType = $(this).attr('data-gtm-clicktype');
        //         var gtmType = $(this).attr('data-gtm-type');
        //         var gtmListName = $(this).attr('data-gtm-item-list-name');

        
        //         // Push to dataLayer
        //         dataLayer = dataLayer || [];  // Initialize dataLayer if it doesn't exist
        //         dataLayer.push({
        //             'event': 'view_item_list',
        //             'eventAction': 'view_item_list',
        //             'eventCategory': gtmName + ':ecommerce',
        //             'ecommerce': {
        //                 'impressions':[{
        //                     'marca': 'coza-mulher',
        //                     'id': 'id',
        //                     'list': gtmName,
        //                     'name': 'nome do produto',
        //                     'preco': 'preco do produto'
        //                 },
        //                 {
        //                     'marca': 'coza-mulher',
        //                     'id': 'id',
        //                     'list': gtmName,
        //                     'name': 'nome do produto',
        //                     'preco': 'preco do produto'
        //                 },
        //                 {
        //                     'marca': 'coza-mulher',
        //                     'id': 'id',
        //                     'list': gtmName,
        //                     'name': 'nome do produto',
        //                     'preco': 'preco do produto'
        //                 },
        //                 {
        //                     'marca': 'coza-mulher',
        //                     'id': 'id',
        //                     'list': gtmName,
        //                     'name': 'nome do produto',
        //                     'preco': 'preco do produto'
        //                 },
        //         ]

        //             }
        //         });
        //     });
        // });

        /**dataLayer push evento de view_item_list */
        $(document).ready(function() {
            // Listen for clicks on any button with data-gtm-type="view"
            $('button[data-gtm-type="view"]').on('click', function() {
                // Get the list name from the clicked element
                var gtmListName = $(this).attr('data-gtm-item-list-name');
                
                // Initialize the impressions array
                var impressions = [];
                
                // Loop through each product block and gather product data
                $('.block2').each(function() {
                    var productName = $(this).find('.js-name-b2').text().trim(); // Product name
                    var productPrice = $(this).find('.stext-105').text().trim();  // Product price
                    var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
                    var productBrand = $(this).attr('data-gtm-marca');
                    var productList = $(this).attr('data-gtm-list');

                    // Push product data to the impressions array
                    impressions.push({
                        'brand': productBrand,       // Static brand name
                        'id': productId,              // Product ID
                        'list': productList,          // List name from the clicked element
                        'item_name': productName,          // Product name
                        'price': productPrice         // Product price
                    });
                });
        
                // Push to dataLayer
                dataLayer = dataLayer || [];  // Initialize dataLayer if it doesn't exist
                dataLayer.push({
                    'event': 'view_item_list',
                    impressions  // Dynamic impressions array

                
                });
            });
        });

        // $(document).ready(function() {
        //     // Listen for clicks on any button with data-gtm-type="view"
        //     $('section[data-gtm-load="productDetail"]').on('load', function() {
        //         // Get the list name from the clicked element
        //         var gtmListName = $(this).attr('data-gtm-item-list-name');
                
        //         // Initialize the impressions array
        //         var impressions = [];
                
        //         // Loop through each product block and gather product data
        //         $('.sec-product-detail').each(function() {
        //             var productName = $(this).find('.js-name-detail').text().trim(); // Product name
        //             var productPrice = $(this).find('.mtext-106').text().trim();  // Product price
        //             var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
        //             var productBrand = $(this).attr('data-gtm-marca');
        
        //             // Push product data to the impressions array
        //             product.push({
        //                 'marca': productBrand,       // Static brand name
        //                 'id': productId,              // Product ID
        //                 'category': gtmListName,          // List name from the clicked element
        //                 'name': productName,          // Product name
        //                 'preco': productPrice         // Product price
        //             });
        //         });
        
        //         // Push to dataLayer
        //         dataLayer = dataLayer || [];  // Initialize dataLayer if it doesn't exist
        //         dataLayer.push({
        //             'event': 'view_item',
        //             'eventAction': 'view_item',
        //             'eventCategory': 'nome do item' + ':ecommerce',
        //             'ecommerce': {
        //                 'product': product  // Dynamic impressions array
        //             }
        //         });
        //     });
        // });
        
        /**dataLayer push evento de view_item */ 
        document.addEventListener("DOMContentLoaded", function() {
            // Select the <section> element with the attribute 'data-gtm-load="productDetail"'
            const targetSection = document.querySelector('.sec-product-detail');
            
            // Check if IntersectionObserver is supported
            if (targetSection && 'IntersectionObserver' in window) {
                // Create a new observer instance
                let observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        // Check if the section is in view
                        if (entry.isIntersecting) {
                            // Get the list name from the section element
                            //var gtmListName = targetSection.getAttribute('data-gtm-item-list-name');
                            
                            // Initialize the impressions array
                            var product = [];
                            
                            // Loop through each product block and gather product data
                            $('.sec-product-detail').each(function() {
                                var productName = $(this).find('.js-name-detail').text().trim(); // Product name
                                var productPrice = $(this).find('.mtext-106').text().trim();  // Product price
                                var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
                                var productBrand = $(this).attr('data-gtm-marca');
        
                                // Push product data to the impressions array
                                product.push({
                                    'brand': productBrand,        // Brand name
                                    'id': productId,              // Product ID
                                    'category': 'homem',      // Category name
                                    'item_name': productName,          // Product name
                                    'price': productPrice         // Product price
                                });
                            });
        
                            // Push to dataLayer
                            dataLayer = dataLayer || [];
                            dataLayer.push({
                                'event': 'view_item',
                                'value': productPrice,
                                'currency': 'BRL',
                                'products': product  // Dynamic impressions array
                            });
        
                            // Stop observing the section after the event is pushed
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
        
                // Start observing the target section
                observer.observe(targetSection);
            } else {
                console.warn("IntersectionObserver is not supported or the section was not found.");
            }
        });
        
        //add to cart
        $(document).ready(function() {
            $('button[data-gtm-type="add-to-cart"]').on('click', function() {
                var items = [];
                $('.sec-product-detail').each(function() {
                    var productName = $(this).find('.js-name-detail').text().trim(); // Product name
                    var productPrice = $(this).find('.mtext-106').text().trim();  // Product price
                    var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
                    var productBrand = $(this).attr('data-gtm-marca');
                    // Push product data to the impressions array
                    items.push({
                        'brand': productBrand,        // Brand name
                        'id': productId,              // Product ID
                        'category': 'homem',      // Category name
                        'item_name': productName,          // Product name
                        'price': productPrice         // Product price
                    });
                });
                
                // Push to dataLayer
                    // Push to dataLayer
                    dataLayer = dataLayer || [];
                    dataLayer.push({
                        'event': 'add_to_cart',
                        items  // Dynamic impressions array
                 });
            });
        });

        //add to wishlist
        $(document).ready(function() {
            $('.btn-addwish-b2').on('click', function() {
                var items = [];

                    var productName = $(this).find('.js-name-detail').text().trim(); // Product name
                    var productPrice = $(this).find('.mtext-106').text().trim();  // Product price
                    var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
                    var productBrand = $(this).attr('data-gtm-marca');
                    // Push product data to the impressions array
                    items.push({
                        'brand': 'coza-mulher',        // Brand name
                        'id': '12',              // Product ID
                        'category': 'mulher',      // Category name
                        'item_name': 'shirt',          // Product name
                        'price': '16.00'         // Product price
                    });
                
                // Push to dataLayer
                    // Push to dataLayer
                    dataLayer = dataLayer || [];
                    dataLayer.push({
                        'event': 'add_to_wishlist',
                        items  // Dynamic impressions array
                 });
            });
        });

        //view cart ou checkout
        document.addEventListener("DOMContentLoaded", function() {
            // Select the <form> element with the attribute class="shopping-cart"'
            const targetSection = document.querySelector('.shopping-cart');
            
            // Check if IntersectionObserver is supported
            if (targetSection && 'IntersectionObserver' in window) {
                // Create a new observer instance
                let observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        // Check if the section is in view
                        if (entry.isIntersecting) {
                            // Initialize the impressions array
                            var items = [];
                            
                            // Loop through each product table_row and gather product data
                            $('.table_row').each(function() {
                                var productName = $(this).find('.column-2').text().trim(); // Product name
                                var productPrice = $(this).find('.column-3').text().trim();  // Product price
                                var productId = $(this).attr('data-product-id') || 'unknown'; // Product ID (optional, if there's an ID attribute)
                                var productBrand = $(this).attr('data-gtm-marca');
        
                                // Push product data to the impressions array
                                items.push({
                                    'brand': productBrand,        // Brand name
                                    'id': productId,              // Product ID
                                    'category': 'homem',      // Category name
                                    'item_name': productName,          // Product name
                                    'price': productPrice         // Product price
                                });
                            });
        
                            // Push to dataLayer
                            dataLayer = dataLayer || [];
                            dataLayer.push({
                                'event': 'view_cart',
                                'value': '79.65',
                                'currency': 'BRL',
                                'items': items  // Dynamic impressions array
                                
                            });
        
                            // Stop observing the section after the event is pushed
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
        
                // Start observing the target section
                observer.observe(targetSection);
            } else {
                console.warn("IntersectionObserver is not supported or the section was not found.");
            }
        });

        //purchase
        document.addEventListener("DOMContentLoaded", function() {
            // Select the <form> element with the attribute class="shopping-cart"'
            const targetSection = document.querySelector('section[data-gtm-load="purchase"]');
            
            // Check if IntersectionObserver is supported
            if (targetSection && 'IntersectionObserver' in window) {
                // Create a new observer instance
                let observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        // Check if the section is in view
                        if (entry.isIntersecting) {

                            // Push to dataLayer
                            dataLayer = dataLayer || [];
                            dataLayer.push({
                                'event': 'purchase',
                                'transaction_id': '09872',
                                'value': '79.65',
                                'tax': '10.65',
                                'frete': '5.65',
                                'currency': 'BRL',
                                'items': [
                                        {
                                        'category': 'homem',
                                        'id': '2',
                                        'brand': 'coza-mulher',
                                        'item_name':'Fresh Strawberries',
                                        'price': '$ 36.00'
                                        },
                                        {
                                         'category': 'homem',
                                         'id': '7',
                                         'brand': 'coza-homem',
                                         'item_name':'"Lightweight Jacket"',
                                         'price': '$ 16.00'   
                                        }
                                    ] 
                                
                            });
        
                            // Stop observing the section after the event is pushed
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
        
                // Start observing the target section
                observer.observe(targetSection);
            } else {
                console.warn("IntersectionObserver is not supported or the section was not found.");
            }
        });
})(jQuery);
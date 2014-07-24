require(['config'], function() {
    require([
        'selectorEngine',
        'bellows'
    ],
    function($) {
        var $console = $('#console');

        var log = function(message) {
            $console.html($console.html() + '<br />' + message);
        };

        $('#clearLog').on('click', function() {
           $console.html('');
        });

        // Default bellows initialization (/examples/default.html)
        $('.bellows.default').bellows({
            open: function() {
                log('open');
            },
            opening: function() {
                log('opening');
            },
            opened: function() {
                log('opened');
            },
            afterOpen: function() {
                log('after open');
            },
            close: function() {
                log('close');
            },
            closing: function() {
                log('closing');
            },
            closed: function() {
                log('closed');
            },
            afterClose: function() {
                log('after close');
            }
        });

        // Bellows with custom animation duration and easing (/examples/animation.html)
        $('.bellows.animation').bellows({
            duration: 1000,
            easing: "easeInOutCubic"
        });

        // Bellows within bellows within bellows... (/examples/inception.html)
        $('.bellows.inception, .bellows.inception .bellows').bellows();

        // Bellows with single item open (/examples/single.html)
        $('.bellows.single').bellows({
            singleItemOpen: true
        });

        // Enable active states
        $(document).on('touchstart', function() {});
    });
});

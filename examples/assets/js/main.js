require(['config'], function() {
    require([
        'selectorEngine',
        'bellows'
    ],
    function($) {
        var $console = $('#console');

        var oldLog = console.log;
        console.log = function(message) {
            $console.html($console.html() + '<br />' + message);
            oldLog.apply(this, arguments);
        };

        $('#clearLog').on('click', function(e) {
            e.preventDefault();
            $console.html('');
        });

        // Default bellows initialization (/examples/default.html)
        $('.bellows.default').bellows({
            open: function() {
                console.log('open');
            },
            opening: function() {
                console.log('opening');
            },
            opened: function() {
                console.log('opened');
            },
            afterOpen: function() {
                console.log('after open');
            },
            close: function() {
                console.log('close');
            },
            closing: function() {
                console.log('closing');
            },
            closed: function() {
                console.log('closed');
            },
            afterClose: function() {
                console.log('after close');
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

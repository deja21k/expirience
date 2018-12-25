$(document).ready(function(){

    initCommunitySlider()
    initDesignSlider();
    toggleMask();

    function initCommunitySlider() {
        $('.community__slider').slick({
            prevArrow: $('.prev1'),
            nextArrow: $('.next1'),
            slidesToShow: 2,
            centerPadding: 0,
        });

    }

    function initDesignSlider() {
        $('.design__slider').slick({
            prevArrow: $('.design__slider-arrows-prev'),
            nextArrow: $('.design__slider-arrows-next'),
            slidesToShow: 1,
        });
    }

    function toggleMask() {
        var getMask = document.querySelector('#maska');
        var maskStyle = window.getComputedStyle(getMask);

        setMaskLocalStorage();

        function setMaskLocalStorage() {
            var topValue = localStorage.getItem('top');
            var leftValue = localStorage.getItem('left');
            getMask.style.top = topValue + 'px';
            getMask.style.left = leftValue + 'px';
        }

        $(document).keydown(function(e){
            var incBy,
            key = {
                h: 72,
                j: 74,
                k: 75,
                l: 76,
                arrowLeft: 37,
                arrowTop: 38,
                arrowRight: 39,
                arrowBottom: 40,
                o: 79,
                r: 82,
                x: 88,
                plus: 187,
                minus: 189,
            };

            function detectInc() {
                if (e.shiftKey) {
                    incBy = 10;
                } else if (e.metaKey) {
                    incBy = 1;
                } else if (e.altKey) {
                    incBy = .2;
                }
            }

            function getMaskVal(value) {
                detectInc();
                return maskStyle.getPropertyValue(value);
            }

            function setMaskVal(value) {
                getMask.style[value] = incBy + 'px';
                cacheMaskVal(value);
            }

            function cacheMaskVal(value) {
                localStorage.setItem(value, incBy);
            }

            function resetMaskVal() {
                getMask.style.top = 0;
                getMask.style.left = '50%';
                getMask.style.opacity = '.5';
            }

            function keyCheck(val) {
                return e.which === key[val];
            }

            detectInc();

            var switchKey = (e.ctrlKey || e.metaKey) || e.shiftKey;

            if (switchKey  && keyCheck('x')){
                $('#maska').toggle();

            } else if ( switchKey &&  (keyCheck('j') || keyCheck('arrowBottom')) ) {
                incBy = parseFloat(getMaskVal('top')) + incBy;
                setMaskVal('top');

            } else if (switchKey && (keyCheck('k') || keyCheck('arrowTop'))) {
                incBy = parseFloat(getMaskVal('top')) - incBy;
                setMaskVal('top');

            } else if (switchKey && (keyCheck('h') || keyCheck('arrowLeft'))) {
                incBy = parseFloat(getMaskVal('left')) - incBy;
                setMaskVal('left');

            } else if (switchKey && (keyCheck('l') || keyCheck('arrowRight'))) {
                incBy = parseFloat(getMaskVal('left')) + incBy;
                setMaskVal('left');

            } else if (keyCheck('r')) {
                resetMaskVal();

            } else if (e.altKey && keyCheck('plus')) {
                incBy = parseFloat(getMaskVal('opacity')) + incBy;
                getMask.style.opacity = incBy.toFixed(2);

            } else if (e.altKey && keyCheck('minus')) {
                incBy = parseFloat(getMaskVal('opacity')) - incBy;
                getMask.style.opacity = incBy.toFixed(2);

            }
        });
    }

});

jQuery(document).ready(function ($) {
    var contentSections = $('.section'),
        navigationItems = $('nav a');

    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    //smooth scroll to the section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this).attr('href'));
    });
    // //smooth scroll to second section
    // $('.cd-scroll-down').on('click', function (event) {
    //  event.preventDefault();
    //  smoothScroll($(this).attr('href'));
    // });

    //open-close navigation on touch devices
    /* $('.touch .cd-nav-trigger').on('click', function () {
      $('.touch #cd-vertical-nav').toggleClass('open');

    }); */
    //close navigation on touch devices when selectin an elemnt from the list
    /* $('.touch #cd-vertical-nav a').on('click', function () {
      $('.touch #cd-vertical-nav').removeClass('open');
    }); */

    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            var activeNavigationItem = $('nav a[href="#' + $this.attr('id') + '"]');
            // var activeNavigationItem = $(`nav a[href= #${$this.attr('id')}]`);

            if ($(window).scrollTop() >= $this.offset().top - $(window).height() / 2) {
                navigationItems.removeClass('active');
                activeNavigationItem.addClass('active')
            }
        });
    }

    function smoothScroll(target) {
        $('body, html').animate(
            { 'scrollTop': $(target).offset().top },
            600
        );
    }
});

var player = new Playerjs({id:"player", file:"//site.com/video.mp4"});

    const modal = document.querySelector('.resizable-modal');
    let isResizing = false;

    modal.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('modal-content')) {
    isResizing = true;
    let prevX = event.clientX;
    let prevY = event.clientY;

    function resizeModal(event) {
    if (isResizing) {
    const width = modal.offsetWidth + (event.clientX - prevX);
    const height = modal.offsetHeight + (event.clientY - prevY);

    modal.style.width = width + 'px';
    modal.style.height = height + 'px';

    prevX = event.clientX;
    prevY = event.clientY;
}
}

    function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resizeModal);
    document.removeEventListener('mouseup', stopResize);
}

    document.addEventListener('mousemove', resizeModal);
    document.addEventListener('mouseup', stopResize);
}
});

import React from 'https://cdn.skypack.dev/react';
import { render } from 'https://cdn.skypack.dev/react-dom';
import { useTweaks } from 'https://cdn.skypack.dev/use-tweaks';

const ROOT_NODE = document.querySelector('#app');

const App = () => {
    const { color, txt, speed, image, stagger, depth, rotation, perspective, translate } = useTweaks({
        txt: 'Hi, how are you?',
        color: '#a502a1',
        speed: { value: 1, min: 0.5, max: 5, step: 0.1 },
        stagger: { value: 0.6, min: 0, max: 5, step: 0.1 },
        depth: { value: 8, min: 0, max: 20, step: 1 },
        rotation: { value: 4, min: 0, max: 40, step: 1 },
        translate: { value: 10, min: 0, max: 20, step: 1 },
        perspective: { value: 80, min: 0, max: 200, step: 1 } });


    const chars = txt.split('');

    return /*#__PURE__*/(
        React.createElement(React.Fragment, null, /*#__PURE__*/
            React.createElement("h1", { style: { '--color': color, '--speed': speed, '--size': image, '--count': chars.length, '--stagger': stagger, '--depth': depth, '--rotation': rotation, '--perspective': perspective, '--translate': translate } }, /*#__PURE__*/
                React.createElement("span", { className: "wave", "aria-hidden": "true" },
                    chars.map((c, index) => {
                        if (c === ' ') return /*#__PURE__*/React.createElement("span", { key: `char-${txt}--${index}`, style: { '--index': index } }, "\xA0");
                        return /*#__PURE__*/React.createElement("span", { key: `char-${txt}--${index}`, style: { '--index': index } }, c);
                    })), /*#__PURE__*/

                React.createElement("span", { className: "sr-only" }, txt))));



};

render( /*#__PURE__*/React.createElement(App, null), ROOT_NODE);
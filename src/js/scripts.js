/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    addPrintOnlyUrls();
});

function addPrintOnlyUrls() {

    function beforePrint() {
        const contactDetailsContainer = document.querySelector('#contact-details');
        const printOnlyUrlsContainer = document.createElement('span');
        printOnlyUrlsContainer.id = 'print-only-urls-container';
        printOnlyUrlsContainer.classList = "d-none d-print-inline";
        printOnlyUrlsContainer.innerHTML = `| <a href="https://www.smtaha.dev/linkedin" target="_blank">smtaha.dev/linkedin</a>
            | <a href="https://www.smtaha.dev/github" target="_blank">smtaha.dev/github</a>
            | <a href="https://www.smtaha.dev/medium" target="_blank">smtaha.dev/medium</a>
        `;
        contactDetailsContainer.appendChild(printOnlyUrlsContainer);
    };

    function afterPrint() {
        const contactDetailsContainer = document.querySelector('#contact-details');
        const printOnlyUrlsContainer = contactDetailsContainer.querySelector('#print-only-urls-container');

        if (printOnlyUrlsContainer) {
            contactDetailsContainer.removeChild(printOnlyUrlsContainer);
        }
    }


    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        window.addEventListener(mediaQueryList, function (mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        })
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;

};
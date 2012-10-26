function createCSS(css) {
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}

function fixMessages() {
    var right = document.getElementById('rightCol');
    var messenger = document.getElementById('pagelet_web_messenger');

    // this hack is there because user style can't have "!important" ATM
    createCSS('#pagelet_web_messenger ._2nb .uiScrollableArea .uiScrollableAreaBody { width: 700px !important; }' +
        '._4y- ._2nc .uiScrollableAreaBody, ._4y- ._2nc { width: 696px !important; }');

    right.style.display = 'none';
    messenger.style.width = '957px';
}


fixMessages();

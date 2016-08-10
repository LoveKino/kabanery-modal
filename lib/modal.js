'use strict';

let {
    view, n
} = require('kabanery');

/**
 * data = {
 *      content,
 *      disappear,
 *      autoHide
 * }
 */
module.exports = view((data, {
    update
}) => {
    if (data.autoHide === undefined) data.autoHide = true;
    if (data.disappear) return null;
    return n('div', {
        style: {
            backgroundColor: 'rgba(60, 60, 60, 0.4)',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100000,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            overflow: 'auto'
        },
        onclick: () => {
            if (data.autoHide) {
                update('disappear', true);
            }
        }
    }, [
        n('div', {
            style: {
                margin: '0 auto',
                display: 'inline-block',
                marginTop: 150,
                borderRadius: 4
            },
            onclick: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }
        }, [data.content])
    ]);
});

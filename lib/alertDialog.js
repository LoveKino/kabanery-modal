'use strict';

let modal = require('./modal');

let {
    view, n
} = require('kabanery');

/**
 * data = {
 *    title,
 *    text,
 *    disappear
 * }
 */

module.exports = view(({
    sure,
    title,
    disappear
}, {
    update
}) => {
    return modal({
        disappear,
        content: [
            n('form', {
                onclick: (e) => {
                    e.preventDefault();
                }
            }, [
                n('h4', title),
                n('fieldset', [
                    n('button', {
                        style: {
                            width: '100%'
                        },
                        onclick: () => {
                            update('disappear', true);
                        }
                    }, 'ok')
                ])
            ])
        ]
    });
});

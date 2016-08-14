'use strict';

let modal = require('./modal');

let {
    view, n
} = require('kabanery');

/**
 * data = {
 *    title,
 *    text,
 *    disappear,
 *    sure
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
                        onclick: () => {
                            update('disappear', true);

                            sure && sure();
                        }
                    }, 'ok'),
                    n('button', {
                        style: {
                            marginLeft: 10
                        },
                        onclick: () => {
                            update('disappear', true);
                        }
                    }, 'cancel')
                ])
            ])
        ]
    });
});

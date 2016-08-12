'use strict';

let modal = require('./modal');

let {
    view, n
} = require('kabanery');

/**
 * data = {
 *    title,
 *    disappear,
 *    autoHide
 * }
 */

module.exports = view(({
    title,
    disappear,
    autoHide
}) => {
    return modal({
        disappear,
        autoHide,
        content: [
            n('form', {
                onclick: (e) => {
                    e.preventDefault();
                }
            }, [
                n('h4', title)
            ])
        ]
    });
});

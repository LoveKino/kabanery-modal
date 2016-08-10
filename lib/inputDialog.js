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

module.exports = view((data, {
    update
}) => {
    return modal({
        disappear: data.disappear,
        content: [
            n('form', {
                onclick: (e) => {
                    e.preventDefault();
                }
            }, [
                n('h4', data.title || ''),
                n('input type=text', {
                    value: data.text || '',
                    onkeyup: (e) => {
                        data.text = e.target.value;
                    }
                }),
                n('br'),
                n('small', data.hint || ''),
                n('fieldset', [
                    n('button', {
                        onclick: () => {
                            data.sure && data.sure(update, data);
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

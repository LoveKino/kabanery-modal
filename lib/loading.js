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
    disappear
}) => {
    let ret = modal({
        disappear,
        autoHide: false,
        content: [
            n('style', `
               @keyframes loading-rotateplane {
                   0% {
                       transform: perspective(120px) rotateX(0deg) rotateY(0deg)
                   }
               
                   50% {
                       transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
                   }
               
                   100% {
                       transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)
           }`),

            n('div', {
                style: {
                    display: 'block',
                    width: 60,
                    height: 60,
                    backgroundColor: '#fff',
                    margin: '0 auto',
                    animation: 'loading-rotateplane 1.2s infinite ease-in-out'
                }
            })
        ]
    });
    return ret;
});

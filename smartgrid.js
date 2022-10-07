let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: true,
    container: {
        maxWidth: '1440px',
        fields: '150px'
    },
    breakPoints: {
        lm: {
            width: '1440px',
            fields: '150px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xxs: {
            width: '375px',
            fields: '17px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */

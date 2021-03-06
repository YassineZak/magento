/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*eslint max-nested-callbacks: 0*/

define([
    'underscore',
    'Magento_Ui/js/grid/columns/date'
], function (_, Date) {
    'use strict';

    describe('Ui/js/grid/columns/date', function () {
        var dateRaw = '2015-08-25 15:11:31',
        dateFormat = 'MMM D, YYYY h:mm:ss A',
        dateFormatted = 'Aug 25, 2015 3:11:31 PM',
        date;

        beforeEach(function () {
            date = new Date ({
                    dataScope: 'abstract'
                });
        });

        describe('initConfig method', function () {
            it('check for chainable', function () {
                expect(date.initConfig()).toEqual(date);
            });
            it('check for extend', function () {
                date.initConfig();
                expect(date.dateFormat).toBeDefined();
            });
        });
    });
});

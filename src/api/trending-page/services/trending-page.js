'use strict';

/**
 * trending-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-page.trending-page');

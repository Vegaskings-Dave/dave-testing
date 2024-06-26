"use strict";

/**
 * A set of functions called "actions" for `sportsbooks`
 */

module.exports = {
  async index(ctx, next) {
    let filter_by = ctx.request.query;
    const entries = await strapi.db.query("api::sportsbook.sportsbook").findMany({
        where: {
          State: {
            State: {
              $contains: filter_by.state,
            },
          },
          publishedAt: {
            $ne: null,
          },
        },
        populate: {
          State: {
            where: {
              State: {
                $contains: filter_by.state,
              },
            },
          },
        },
      });

    if (entries.length > 0) {
      ctx.body = entries;
      return;
    }

    const defualt_entry = await strapi.db.query("api::sportsbook.sportsbook").findOne({
        where: {
          Default: true,
        },
        populate: {
          State: {
            where: {
              State: {
                $contains: "Default_link",
              },
            },
          },
        },
      });
    ctx.body = defualt_entry;
  },
};

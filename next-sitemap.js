module.exports = {
    siteUrl: process.env.SITE_URL || 'https://transport.autoave.in',
    generateRobotsTxt: true,
    // transform: async (config, path) => {
    //     return {
    //         loc: path.replace('/en-US', ''),
    //         changefreq: config.changefreq,
    //         priority: config.priority,
    //         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    //         alternateRefs: config.alternateRefs
    //     }
    // }
}

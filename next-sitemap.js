cities = [
    "Ahmedabad",
    "Bangalore",
    "Bengaluru",
    "Chandigarh",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Indore",
    "Kanpur",
    "Lucknow",
    "Mumbai",
    "Noida",
    "Patna",
    "Pune",
    "Kolkata",
    "Gurgaon",
]

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://transport.autoave.in',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        // console.log(path)
        if(path == '/'){
            return {
                loc: path,
                changefreq: config.changefreq,
                priority: 1,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                alternateRefs: config.alternateRefs
            }
        }
        for(city of cities){
            city = city.toLowerCase();
            if(path.includes(city)){
                return {
                    loc: path,
                    changefreq: config.changefreq,
                    priority: 0.9,
                    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                    alternateRefs: config.alternateRefs
                }
            }
        }
        if(path.includes('consumer') || path.includes('service-partner')){
            return {
                loc: path,
                changefreq: config.changefreq,
                priority: 0.1,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                alternateRefs: config.alternateRefs
            }
        }
        return {
            loc: path.replace('/en-US', ''),
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs
        }
    }
}

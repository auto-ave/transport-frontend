import scene from '@public/images/bangalore-scene.webp'
import scene2 from '@public/images/galway-scene.webp'

const LOCALISATION_DATA = {
    "en-US": {
        address: "No-42 ,4th Main, NGEF Layout, Postal Colony, Sanjaynagar,  Bangalore, Karnataka-560094",
        email: "care@autoave.in",
        domain: "https://transport.autoave.in",
        country: "India",
        service_location_text: "Proudly serving in Bangalore",
        city_image: scene,
    },
    "en-ie": {
        address: "200 Rosan Glas, Rahoon Galway H91 A8XT",
        email: "care@autoave.ie",
        domain: "https://transport.autoave.ie",
        country: "Ireland",
        service_location_text: "Soon starting services in Galway",
        city_image: scene2,
    },
}

export const COUNTRY_TO_LOCALE = (country) => {
    switch(country){
        case 'Ireland':
            return 'en-ie';
        default:
            return 'en-US';
    }
}

export default LOCALISATION_DATA
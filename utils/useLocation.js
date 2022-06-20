import axios from 'axios'

export const location_api = () => axios.get('https://ipapi.co/json/')

export default function useLocation(){
    location_api().then((response) => {
        let data = response.data;
        console.log({
            countryName: data.country_name,
            countryCode: data.country_calling_code
        })
        return {
            countryName: data.country_name,
            countryCode: data.country_calling_code
        }
    }).catch((error) => {
        console.log(error);
        return {}
    });
}
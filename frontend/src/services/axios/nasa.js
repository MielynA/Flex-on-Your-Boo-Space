import NasaApiUrl from './apodUrl';
import axios from 'axios';

const NasaAxiosService = {};

NasaAxiosService.getSpaceInfo = async (date) => await axios.get(NasaApiUrl, {
    params: {
        date,
        hd: true
    }
}).then(res => res.data)

export default NasaAxiosService;

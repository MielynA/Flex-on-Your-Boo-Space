import dbConnectUrl from './dbConnect';
import axios from 'axios';

const CardAxiosService = {};

CardAxiosService.getSpaceCard = async (id) => (
    await axios.get(`${dbConnectUrl}/booSpace/${id}`).then(res => res.data)
);

CardAxiosService.getAllSpaceCards = async () => (
    await axios.get(`${dbConnectUrl}/booSpace/all`).then(res => res.data)
);

CardAxiosService.createSpaceCard = async (toName, fromName, personalNote, img_url, horoscopeSign, spaceDate, description, title) => (
    await axios.post(`${dbConnectUrl}/booSpace/`, {
        toName,
        fromName,
        personalNote,
        img_url,
        horoscopeSign,
        description,
        spaceDate,
        title
    })
    .then(res => res.data)
);

export default CardAxiosService;
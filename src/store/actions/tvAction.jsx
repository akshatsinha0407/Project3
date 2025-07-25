export {removetv} from '../reducers/tvSlice.jsx';

import axios from '../../utils/axios.jsx';
import { loadtv } from '../reducers/tvSlice.jsx';

export const asyncloadtv = (id) => async (dispatch, getState) => {
    try { 
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`); // Fixed endpoint
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations =  await axios.get(`/tv/${id}/translations`)
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);    

        let theyltimatedetails = {
            details: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.name),
            videos: videos.data.results.find((m)=> m.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN
        }
        
        dispatch(loadtv(theyltimatedetails)); // Add dispatch to update store
        console.log(theyltimatedetails);
    }
    catch (error) {
        console.error("Error loading tv details:", error);
    }
}
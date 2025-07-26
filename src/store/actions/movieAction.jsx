export {removemovie} from '../reducers/movieSlice.jsx';

import axios from '../../utils/axios';
import { loadmovie } from '../reducers/movieSlice.jsx';

export const asyncloadmovie = (id) => async (dispatch, gerState) => {
    try { 
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`); // Fixed endpoint
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations =  await axios.get(`/movie/${id}/translations`)
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);    

        let theyltimatedetails = {
            details: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.name),
            videos: videos.data.results.find((m)=> m.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN
        }
        
        dispatch(loadmovie(theyltimatedetails)); // Add dispatch to update store
        
    }
    catch (error) {
        console.error("Error loading movie details:", error);
    }
}
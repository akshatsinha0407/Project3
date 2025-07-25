 export { removeceleb } from '../reducers/celebSlice.jsx';
import axios from '../../utils/axios';
import { loadceleb } from '../reducers/celebSlice.jsx';

export const asyncloadceleb = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        let ultimatedetails = {
            details: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
        }

        dispatch(loadceleb(ultimatedetails));
        console.log(ultimatedetails);
    }
    catch (error) {
        console.error("Error loading celeb details:", error);
    }
}
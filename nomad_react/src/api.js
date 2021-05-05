import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
       "api_key":"165ef33c3cb947772becf27a6d03d4d1",
       "language":"en-US"
    }
});
//  앞에 "/"들어가면 절대경로 
// api.get("tv/popular");
// 차이점을 확인하자 
// fetch(`${baseURL}`,request)

export const moviesApi = {
    upcoming: () => api.get("movie/upcoming"),
    nowPlaying: () => api.get("movie/now_playing"),
    popular: () => api.get("movie/poplar"),
    movieById: id => api.get(`movie/${id}`, {
        params: {
            append_to_response:"videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export const tvsApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response:"videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export default api;
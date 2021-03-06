import { moviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

//import Message from "Components/Message";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };
    //
    async componentDidMount(){
        //전체 API요청 or 각각 요청을 분리된함수로 만들수 있음
        try{
            //throw Message();
            const {data: {results: nowPlaying}} = await moviesApi.nowPlaying();
            const {data: {results: upcoming}} = await moviesApi.upcoming();
            const {data: {results: popular}} = await moviesApi.popular();
            
            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            });
        }catch{
            this.setState({
                error:"Can't find movie information."
            });
        }finally{
            this.setState({
                loading:false
            });
        }
    }
    //
    render(){
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        
        return (
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}
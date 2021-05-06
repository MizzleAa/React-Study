import { tvsApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading:true,
        error:null
    }
    
    async componentDidMount(){
        try{
            const {data :{results:topRated}} = await tvsApi.topRated();
            const {data :{results:popular}} = await tvsApi.popular();
            const {data :{results:airingToday}} = await tvsApi.airingToday();
            
            this.setState({
                topRated:topRated,
                popular:popular,
                airingToday:airingToday
            });
        }catch(error){
            this.setState({
                error:"Can't find TV information."
            });
        }finally{
            this.setState({
                loading:false
            });
        }
    }

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        //console.log(this.state);
        return <TVPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            loading={loading}
            error={error}
        />
    }
}
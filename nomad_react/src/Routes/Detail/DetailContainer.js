import { moviesApi, tvsApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
    //
    constructor(props){
        super(props);
        const {location:{pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }
    //
    async componentDidMount(){
        const {
            match:{
                params:{id}
            },
            history:{push}
        } = this.props;
        const {isMovie} = this.state;
        const parsedID = parseInt(id);
        if(isNaN(parsedID)){
            return push("/");
        }

        let result = null;
        try{
            if(isMovie){
                ({data:result} = await moviesApi.movieDetail(parsedID));
            }
            else{
                ({data:result} = await tvsApi.showDetail(parsedID));
            }
            //console.log("Detail : ",result);
        }catch{
            this.setState({error:"Can't find anything."})
        }finally{
            this.setState({loading:false, result})
        }
        
    }
    //
    render(){
        const { result, error, loading } = this.state;
        console.log(result)
        return (
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}
import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import tw from "twin.macro";

import Loader from "Components/Loader";

//
const Container = styled.div`
    ${tw`p-3 w-screen h-screen text-center`}
`;

const Backdrop = styled.div`
    background-image: url(${props => props.bgImage});
    ${tw`w-full h-1/2 bg-no-repeat bg-contain  bg-center`}
`;

const Content = styled.div`
`;
//
const DetailPresenter = (
    {result, error, loading}
) => (
    loading ? 
        <Loader />
     : 
    <Container>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content></Content>
    </Container>
    
);
DetailPresenter.prototype = {
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
}

export default DetailPresenter;
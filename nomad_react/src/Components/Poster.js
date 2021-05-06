import React from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`text-sm shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105`}
`;

const ImageContainer = styled.div`
    ${tw`mb-1`}
`;

//https://image.tmdb.org/t/p/w300$
const Image = styled.div`
    background-image: url(${props => 
        `https://image.tmdb.org/t/p/w300${props.bgUrl}`});
    ${tw`block bg-center h-56 rounded-lg`}
`;

const Rating = styled.span`
    ${tw`block font-bold`}
`;

const Title = styled.span`
    ${tw`block font-bold overflow-ellipsis`}
`;

const Year = styled.span`
    ${tw`block `}
`;

const Poster = ( {id, imageUrl, title, rating, year, isMovie = false} ) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl}>
                    
                </Image>
            </ImageContainer>
            <Rating><span role="img" aria-label="rating">💛</span>{" "}{rating}/10</Rating>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
    
)

Poster.prototype = {
    id : PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired, 
    rating: PropTypes.number,
    year: PropTypes.string,
    isMove: PropTypes.bool
}

export default Poster
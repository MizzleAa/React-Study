import React from "react";
import PropTypes from "prop-types";

import tw from "twin.macro"
import styled from "styled-components";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    ${tw`w-full`}
`;

const Form = styled.form`
    ${tw`p-5`}
`;

const Input = styled.input`
    ${tw`w-full bg-gray-800 p-2 text-yellow-300 font-bold rounded-full border-4 border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent`}
`;


const SearchPresenter = (
    { movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm }
) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Show..." value={searchTerm} onChange={updateTerm} />
        </Form>
        {loading ? <Loader /> :
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={movie.release_date}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show Results">
                        {tvResults.map(show => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show.original_name}
                                imageUrl={show.poster_path}
                                rating={show.vote_average}
                                year={show.first_air_date}
                                isMovie={false}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message text={error} color="rgb(239, 68, 68)" />}
                {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 &&
                    <Message text="Noting found" />
                }
            </>
        }
    </Container>
);

SearchPresenter.prototype = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;
import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro"
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    ${tw`w-full`};
`;

const HomePresenter = (
    { nowPlaying, upcoming, popular, error, loading }
) => loading ? <Loader /> :
        <Container>
            {nowPlaying && nowPlaying.length > 0 &&
                <Section title="Now Playing">
                    {nowPlaying.map(movie =>
                        //{imageUrl, title, rating, year, isMovie = false}
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date}
                            isMovie={true}
                        />
                    )}
                </Section>
            }
            {upcoming && upcoming.length > 0 &&
                <Section title="Upcoming Movies">
                    {upcoming.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date}
                            isMovie={true}
                        />
                    )}
                </Section>
            }
            {popular && popular.length > 0 &&
                <Section title="Popular Movies">
                    {popular.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            imageUrl={movie.poster_path}
                            rating={movie.vote_average}
                            year={movie.release_date}
                            isMovie={true}
                        />
                    )}
                </Section>
            }
            {error && <Message text={error} color="rgb(239, 68, 68)" />}
        </Container>;

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default HomePresenter;
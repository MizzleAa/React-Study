import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro"
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    ${tw`w-full`};
`;

const TVPresenter = (
    { topRated, popular, airingToday, loading, error }
) => loading ? <Loader /> :
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map(show =>
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.original_name}
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date}
                            isMovie={false}
                        />
                    )}
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="Top Popular Shows">
                    {popular.map(show =>
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.original_name}
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date}
                            isMovie={false}
                        />
                    )}
                </Section>
            )}

            {airingToday && airingToday.length > 0 && (
                <Section title="Top Airing Today">
                    {airingToday.map(show =>
                        <Poster
                            key={show.id}
                            id={show.id}
                            title={show.original_name}
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={show.first_air_date}
                            isMovie={false}
                        />
                    )}
                </Section>
            )}
            {error && <Message text={error} color="rgb(239, 68, 68)" />}
        </Container>
    ;
TVPresenter.prototype = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;
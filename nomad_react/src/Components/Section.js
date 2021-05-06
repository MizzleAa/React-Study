import react from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";
//
const Container = styled.div`
    ${tw`w-full min-h-full md:mx-auto p-5`};
`;

const Title = styled.span`
    ${tw`font-bold text-xl`}
`;

const TitleHr = styled.hr`
    ${tw`my-2 border-2 border-yellow-400`}
`;
const Grid = styled.div`
    ${tw`p-1 grid grid-flow-col grid-cols-5 grid-rows-4 gap-6 text-center`}
`;

//
const Section =({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <TitleHr />
        <Grid>{children}</Grid>
    </Container>
    
);

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Section;
import react from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`w-full min-h-full align-middle text-5xl text-center`};
`;

const Span = styled.span`
    ${tw`w-full p-10 font-extrabold inline-block align-middle text-yellow-500`};
`;
const Loader = () => (
    <Container>
        <Span>
            Loading...
        </Span>
    </Container>
)

export default Loader;
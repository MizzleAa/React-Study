import react from "react";

import PropTypes from "prop-types";

import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`w-full min-h-full align-middle text-5xl text-center`};
`;

const Span = styled.span`
    ${tw`w-full p-10 font-extrabold inline-block align-middle text-red-500`};
`;
const Message = ({text, color}) => (
    <Container>
        <Span color={color}>
            {text}
        </Span>
    </Container>
)

Message.prototype = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Message;
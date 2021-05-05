import React from "react";
import tw from "twin.macro"
import { Link } from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    ${tw`w-full`}
`;

const List = styled.ul`
    ${tw`font-bold text-lg flex bg-gradient-to-b from-blue-900 to-blue-800`}
`

const Item = styled.li`
    ${tw`text-center text-gray-50 hover:bg-gray-50 hover:text-blue-900`}
`;

const SLink = styled(Link)`
    ${tw`border-b-4 w-40 p-3 block`}
`;

//
function header() {

    return (
        <Header>
            <List>
                <Item current={false} >
                    <SLink to="/">Movies</SLink>
                </Item>
                <Item current={false} >
                    <SLink to="/tv">TV</SLink>
                </Item>
                <Item current={false} >
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </Header>
    )
}

export default header
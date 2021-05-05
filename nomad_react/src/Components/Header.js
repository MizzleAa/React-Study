import React from "react";
import tw from "twin.macro"
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";


const Header = styled.header`
    ${tw`w-full`};
`;

const List = styled.ul`
    ${tw`font-bold text-lg flex bg-gradient-to-b from-gray-900 to-gray-800`};
`

const Item = styled.li`
    ${props => props.current ?
        tw`text-center text-gray-50 hover:text-yellow-400 transition delay-75 text-yellow-400 border-b-4 ease-in-out border-yellow-400` :
        tw`text-center text-gray-50 hover:text-yellow-400`
    };
`;

const SLink = styled(Link)`
    ${tw`p-3 w-40 block`};
`;

//
const View = ({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"} >
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"} >
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"} >
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
)
//withRouter 경로 링킹값 확인 가능
export default withRouter(View)
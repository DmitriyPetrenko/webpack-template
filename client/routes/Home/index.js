// Core
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;

    :hover {
        color: red;
    }
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

function Home() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
        </Wrapper>
    );
}

export default Home;

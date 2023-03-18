import { useEffect } from "react";
import styled from "styled-components";
import { Language } from "../utils";

const PageNotFoundBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 500px;
    border-radius: 50%;

    overflow: hidden;
    background-color: var(--block-background);
    outline: 3px solid var(--border-color);
    transform: translateX(-50%);
    animation: 2s ease-out 0s 1 slideInFromLeft;

    > * {
        box-sizing: border-box !important;
        width: 50%;
        margin-left: 50%;
        padding: 1%;
    }
`;

const Text = styled.span`
    font-size: 24px;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    font-size: 48px;
`;

const Comment = styled.span`
    margin-top: 30px;
    font-size: 10px;
`;

const PageNotFound = () => {
    useEffect(() => {
        document.title = 'Page not found';
    }, []);
    
    return (
        <PageNotFoundBlock>
            <Title>Error 404</Title>
            <Text>There is no such page here.</Text>
            <Text>You can return to <a className="gradient-link" href={"/my-portfolio/" + Language.name}>main page</a></Text>
            <Comment>Or just keep looking at these cute peas.</Comment>
        </PageNotFoundBlock>
    )
};

export default PageNotFound;
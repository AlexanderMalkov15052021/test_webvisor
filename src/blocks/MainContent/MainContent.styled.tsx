import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NavButton = styled.button`
    background-color: blueviolet;
    border-radius: 8px;
    margin: 30px;
    & {
        a {
            display: block;
            padding: 10px;
        }
    }
`;

export const DescriptionBlock = styled.div`
    width: 50vw;
    height: 10vw;
    background-color: lightblue;
    border-radius: 8px;
    margin: 30px;
    padding: 10px;
`;
import styled from "styled-components";

export const DropdownMenu = styled.div`
    width: 20vw;
    background-color: burlywood;
    border-radius: 8px;
    margin: 10px;
    & {
        li {
            list-style-type: none;
        }
    }
`;

export const ButtonMenu = styled.button`
    width: 100px;
    background-color: violet;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
`;
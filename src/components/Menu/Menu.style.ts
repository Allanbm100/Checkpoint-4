import styled from "styled-components";

export const StyledMenu = styled.nav`
    box-shadow: 0 -1px 0.5px rgba(200, 200, 200, 0.6);
    display: block;
    align-items: flex-end;
`

export const StyledWrapperMenu = styled.ul`
    width: 100%;
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

export const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

& a {
        font-size: 1rem;
        font-weight: 500;
        color: #2676d1;
    }
`
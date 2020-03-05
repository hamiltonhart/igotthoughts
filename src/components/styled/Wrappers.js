import styled from "styled-components"

export const FlexWrapper = styled.div`
    display: flex;
    ${props => props.position && `position: ${props.position};`}
    flex-direction: ${props => props.flexDirection || "row"};
    justify-content: ${props => props.justifyContent || "center"};
    align-items: ${props => props.alignItems || "center"};
    ${props => props.top && `top: ${props.top};`}
    ${props => props.bottom && `bottom: ${props.bottom};`}
    ${props => props.left && `left: ${props.left};`}
    ${props => props.right && `right: ${props.right};`}
    box-sizing: border-box;
    padding: ${props => props.padding || "0"};
    margin: ${props => props.margin || "0"};
    height: ${props => props.height || "inherit"};
    ${props => props.minHeight && `min-height: ${props.minHeight};`}
    width: ${props => props.width || "inherit"};
    background-color: ${props => props.background || "white"};
`

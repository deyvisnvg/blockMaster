import styled from "../lib/styled-components.js";

const Wrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    position: relative;
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

export default Wrapper;
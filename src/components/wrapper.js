import styled from "../lib/styled-components.js";

const Wrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};
`

export default Wrapper;
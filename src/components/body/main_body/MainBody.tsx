import styled from "styled-components";
import {HeaderMainBody} from "./header_main_body/HeaderMainBody.tsx";

export const MainBody = () => {
    return (
        <Wrapper>
            <HeaderMainBody/>
        </Wrapper>
    );
}

MainBody.displayName = 'MainBody';

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  width: calc(100vw - 260px);
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
`;
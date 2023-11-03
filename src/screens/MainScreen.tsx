import styled from "styled-components";
import {LeftSidebar} from "../components/left_sidebar/LeftSidebar.tsx";
import {MainBody} from "../components/body/main_body/MainBody.tsx";

export const MainScreen = () => {
    return (
        <Wrapper>
            <LeftSidebar/>
            <MainBody/>
        </Wrapper>
    );
}

MainScreen.displayName = 'MainScreen';

const Wrapper = styled.div.attrs({className: 'main-wrapper'})`
  display: flex;
  overflow: hidden;
  background-size: cover;
`;

import styled from "styled-components";
import {LeftSidebar} from "../components/left_sidebar/LeftSidebar.tsx";

export const MainScreen = () => {
    return (
        <Wrapper>
            <LeftSidebar/>
        </Wrapper>
    );
}

MainScreen.displayName = 'MainScreen';

const Wrapper = styled.div.attrs({className: 'main-wrapper'})`
  display: flex;
  overflow: hidden;
  background-size: cover;
`;

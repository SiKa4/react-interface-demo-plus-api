import styled from "styled-components";
import {HeaderMainBody} from "./header_main_body/HeaderMainBody.tsx";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../data/stores/app.store.ts";

export const MainBody = observer(() => {
    return (
        <Wrapper isMobile={appStore.getIsMobile}>
            <HeaderMainBody/>
        </Wrapper>
    );
});

MainBody.displayName = 'MainBody';

const Wrapper = styled.div.attrs({className: 'wrapper'})<{isMobile: boolean}>`
  width: ${props => props.isMobile ? '100vw' : 'calc(100vw - 260px)'};
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
`;
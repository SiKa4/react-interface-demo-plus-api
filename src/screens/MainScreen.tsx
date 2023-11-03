import styled, {css} from "styled-components";
import {LeftSidebar} from "../components/left_sidebar/LeftSidebar.tsx";
import {useState} from "react";
import {EmptyBody} from "../components/body/EmptyBody.tsx";
import {appStore} from "../data/stores/app.store.ts";
import {hamburgerMenu} from "../assets/img.ts";
import {observer} from "mobx-react-lite";

export const MainScreen = observer(() => {
    const [body, setBody] = useState<JSX.Element>(<EmptyBody/>);
    const selectedLeftSidebarCategory = (component: JSX.Element) => setBody(component);

    return (
        <Wrapper>
            {appStore.getIsMobile &&
                <HamburgerIcon src={hamburgerMenu} isOpen={appStore.isOpenLeftSidebar}
                               onClick={() => appStore.setIsOpenLeftSidebar(!appStore.isOpenLeftSidebar)}/>
            }
            <LeftSidebar callbackMethod={selectedLeftSidebarCategory}/>
            {body}
        </Wrapper>
    );
});


MainScreen.displayName = 'MainScreen';

const Wrapper = styled.div.attrs({className: 'main-wrapper'})`
  display: flex;
  overflow: hidden;
  background-size: cover;
`;

const HamburgerIcon = styled.img.attrs({className: 'hamburger-icon'})<{ isOpen: boolean }>`
  height: 24px;
  width: 24px;
  cursor: pointer;
  filter: invert(1);
  z-index: 20;
  position: absolute;
  left: 5px;
  top: 13px;
  
  ${({isOpen}) =>
          isOpen &&
          css`
            transition: transform 0.5s ease;
            transform: rotateY(180deg) rotate(90deg);
          `}

  ${({isOpen}) =>
          !isOpen &&
          css`
            transition: transform 0.5s ease;
            transform: rotateY(180deg) rotate(0deg);
          `}
`;

import styled, {css} from "styled-components";
import {LeftSidebar} from "../components/left_sidebar/LeftSidebar.tsx";
import {useState} from "react";
import {EmptyBody} from "../components/body/EmptyBody.tsx";
import {RootState} from "../data/stores/app.store.ts";
import {hamburgerMenu} from "../assets/img.ts";
import {useDispatch, useSelector} from "react-redux";
import {setIsOpenLeftSidebar} from "../data/stores/actions/actions.ts";

export const MainScreen = () => {
    const [body, setBody] = useState<JSX.Element>(<EmptyBody/>);

    const dispatch = useDispatch();
    const isMobile = useSelector((state: RootState) => state.store.isMobile);
    const isOpenLeftSidebar = useSelector((state: RootState) => state.store.isOpenLeftSidebar);

    const selectedLeftSidebarCategory = (component: JSX.Element) => setBody(component);

    return (
        <Wrapper>
            {isMobile &&
                <HamburgerIcon src={hamburgerMenu} isOpen={isOpenLeftSidebar}
                               onClick={() => dispatch(setIsOpenLeftSidebar(!isOpenLeftSidebar))}/>
            }
            <LeftSidebar callbackMethod={selectedLeftSidebarCategory}/>
            {body}
        </Wrapper>
    );
};


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
  z-index: 11;
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

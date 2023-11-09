import styled, {css} from "styled-components";
import {LeftSidebarHeader} from "./left_sidebar_header/LeftSidebarHeader.tsx";
import {DropDownMenu} from "../drop_down_menu/DropDownMenu.tsx";
import {HTMLAttributes, useEffect, useState} from "react";
import {useGetAllFilialQuery} from "../../api_request/api-request.ts";
import {EmptyBody} from "../body/EmptyBody.tsx";
import {MainBody} from "../body/main_body/MainBody.tsx";
import {appStore} from "../../data/stores/app.store.ts";
import {observer} from 'mobx-react-lite';

type LeftSidebar = HTMLAttributes<HTMLDivElement> & {
    callbackMethod: (component: JSX.Element) => void;
};

export const LeftSidebar = observer(({callbackMethod}: LeftSidebar) => {
    const [indexOpenCategory, setIndexOpenCategory] = useState(3);
    const [selectedFilialDropDown, setSelectedFilialDropDown] = useState<{
        id: number,
        name: string
    } | null | undefined>(null);

    const {  data: filialContents } = useGetAllFilialQuery();

    useEffect(() => {
        if (!selectedFilialDropDown) return;
        appStore.setSelectFilial(selectedFilialDropDown.id);
    }, [selectedFilialDropDown]);

    useEffect(() => {
        callbackMethod(componentMenu[indexOpenCategory].component)
    }, [indexOpenCategory]);

    const componentMenu = [
        {name: 'Компоненты', component: <EmptyBody/>},
        {name: 'Полуфабрикаты', component: <EmptyBody/>},
        {name: 'Товары', component: <EmptyBody/>},
        {name: 'Меню', component: <MainBody/>},
        {name: 'Перемещения', component: <EmptyBody/>},
        {name: 'Ивентаризация', component: <EmptyBody/>},
        {name: 'Выпуск товара', component: <EmptyBody/>},
        {name: 'Списание', component: <EmptyBody/>},
        {name: 'Накладные', component: <EmptyBody/>},
    ];

    const callbackDropDownMenu = (id: number) =>
        setSelectedFilialDropDown(filialContents?.find(x => x.id == id));

    const setIsOpenCategory = (index: number) => setIndexOpenCategory(index);

    return (
        <Wrapper isMobile={appStore.getIsMobile} isOpen={appStore.isOpenLeftSidebar}>
            <LeftSidebarHeader/>
            <ExpandMenuWrapper>
                <FilialWrapper>
                    Филиалы
                    <DropDownMenu callbackMethod={callbackDropDownMenu}
                                  contents={filialContents} isStretching={true}/>
                </FilialWrapper>
                <MenuWrapper>
                    {componentMenu.map((x, i) => (
                        <P onClick={() => setIsOpenCategory(i)} isOpen={indexOpenCategory == i}>− {x.name}</P>
                    ))}
                </MenuWrapper>
            </ExpandMenuWrapper>
        </Wrapper>
    );
});

LeftSidebar.displayName = 'LeftSidebar'

const Wrapper = styled.div.attrs({className: 'wrapper'})<{ isMobile: boolean, isOpen: boolean }>`
  width: 250px;
  height: calc(100vh - 140px);
  padding: 10px;
  transition: transform 1s;
  z-index: 10;

  ${({isMobile, isOpen}) => isMobile && !isOpen && css`
    position: absolute;
    transform: translateX(-105%);
  `}

  ${({isMobile, isOpen}) => isMobile && isOpen && css`
    position: absolute;
  `}
`;

const ExpandMenuWrapper = styled.div.attrs({className: 'expand-name-wrapper'})`
  border-right: 2px rgba(7, 38, 89, 0.25) solid;
  height: 100%;
  width: 250px;
  padding-right: 10px;
  background-color: white;
`;

const FilialWrapper = styled.div.attrs({className: 'filial-wrapper'})`
  font-size: 15px;
  margin-top: 10px;
  border-bottom: var(--line-color) 1px solid;
  padding-bottom: 10px;
  color: var(--line-color);
`;

const P = styled.p<{ isOpen: boolean }>`
  margin: 10px 0 0;
  height: 25px;
  cursor: pointer;
  color: var(--line-color);
  font-size: 14px;
  border-radius: 5px;
  padding-left: 10px;
  align-items: center;
  display: flex;
  transition: box-shadow 0.5s ease-in-out, height 0.3s ease-in-out;

  ${({isOpen}) => isOpen && css`
    height: 40px !important;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
  `}
  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
    height: 35px;
  }

`;

const MenuWrapper = styled.div.attrs({className: 'menu-wrapper'})`
`;
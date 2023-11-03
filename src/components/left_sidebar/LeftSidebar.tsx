import styled from "styled-components";
import {LeftSidebarHeader} from "./left_sidebar_header/LeftSidebarHeader.tsx";
import {DropDownMenu} from "../drop_down_menu/DropDownMenu.tsx";
import {useState} from "react";

export const LeftSidebar = () => {

    const componentMenu = [
        'Компоненты',
        'Полуфабрикаты',
        'Товары',
        'Меню',
        'Перемещения',
        'Ивентаризация',
        'Выпуск товара',
        'Списание',
        'Накладные'
    ];
    const [indexOpenCategory, setIndexOpenCategory] = useState(3);

    const callbackDropDownMenu = (index: number) => {

    };

    const setIsOpenCategory = (index: number) => setIndexOpenCategory(index);

    return (
        <Wrapper>
            <LeftSidebarHeader/>
            <ExpandMenuWrapper>
                <FilialWrapper>
                    Филиалы
                    <DropDownMenu callbackMethod={callbackDropDownMenu}
                                  contents={[{id: 1, name: 'Новосибирск'}, {id: 2, name: 'Шелехов'}, {
                                      id: 3,
                                      name: 'Ангарск'
                                  }]}/>
                </FilialWrapper>
                <MenuWrapper>
                    {componentMenu.map((x, i) => (
                        <P onClick={() => setIsOpenCategory(i)} isOpen={indexOpenCategory == i}>− {x}</P>
                    ))}
                </MenuWrapper>
            </ExpandMenuWrapper>
        </Wrapper>
    );
}

LeftSidebar.displayName = 'LeftSidebar'

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  width: 260px;
  height: 100vh;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;

`;

const ExpandMenuWrapper = styled.div.attrs({className: 'expand-name-wrapper'})`
  border-right: 2px rgba(7, 38, 89, 0.25) solid;
  height: 100%;
  padding-right: 10px;
`;

const FilialWrapper = styled.div.attrs({className: 'filial-wrapper'})`
  color: var(--light-color);
  font-size: 15px;
  margin-top: 10px;
  border-bottom: var(--line-color) 1px solid;
  padding-bottom: 10px;
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

  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    height: 35px;
  }
`;

const MenuWrapper = styled.div.attrs({className: 'menu-wrapper'})`
`;
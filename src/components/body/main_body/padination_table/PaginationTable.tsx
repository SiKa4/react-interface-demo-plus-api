import styled from "styled-components";
import {HTMLAttributes, useEffect, useState} from "react";
import {arrowIcon} from "../../../../assets/img.ts";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../../data/stores/app.store.ts";

type PaginationTable = HTMLAttributes<HTMLDivElement> & {
    maxPages: number;
    callbackSelectedPage: (page: number) => void;
};

const pagesCollapse = 4;

export const PaginationTable = observer(({maxPages, callbackSelectedPage}: PaginationTable) => {
    const [firstIndex, setFirstIndex] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        callbackSelectedPage(selectedIndex + 1);
        if((selectedIndex + 1) - 4 >= maxPages - 6) setIsOpen(true);
    }, [selectedIndex]);

    useEffect(() => {
        updatePagination();
    }, [appStore.getSelectFilial, maxPages]);

    function updatePagination() {
        setSelectedIndex(0);
        setFirstIndex(1);
        setIsOpen(false);
    }

    const selectedItem = (index: number) => {
        setSelectedIndex(index)
        setFirstIndex(index + 1);
    }

    const plusAndMinusIndex = (value: number) => {
        if (firstIndex + value > maxPages || firstIndex + value < 1) return;
        setSelectedIndex(selectedIndex + value);
        setFirstIndex(firstIndex + value)
    };

    const contentsNav = Array.from({length: maxPages}, (_v, i) => (
        <WrapperPage key={i} isSelected={i == selectedIndex}
                     onClick={() => selectedItem(i)}>{i + 1}</WrapperPage>
    ));

    const contentsNavCollapse = (
        <>
            {
                Array.from({length: 3}, (_v, i) => (
                    <WrapperPage key={firstIndex + i}
                                 isSelected={selectedIndex + i == selectedIndex}
                                 onClick={() => selectedItem(selectedIndex + i)}>{firstIndex + i}</WrapperPage>
                ))
            }
            <WrapperPage key='...' onClick={() => setIsOpen(true)}>...</WrapperPage>
            <WrapperPage key={maxPages} isSelected={maxPages == selectedIndex} onClick={() => selectedItem(maxPages - 1)}>{maxPages}</WrapperPage>
        </>
    );


    return (
        <Wrapper>
            <Img src={arrowIcon} onClick={() => plusAndMinusIndex(-1)}/>
            {(maxPages <= pagesCollapse || isOpen) && contentsNav}
            {(maxPages > pagesCollapse && !isOpen) && contentsNavCollapse}
            <Img src={arrowIcon} onClick={() => plusAndMinusIndex(1)}/>
        </Wrapper>
    );
});

PaginationTable.displayName = 'PaginationTable';

const Img = styled.img`
  cursor: pointer;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  height: 35px;
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  transition: width 1s ease-in-out;
  padding-top: 10px;

  & ${Img}:last-child {
    transform: rotate(180deg);
  }
`;

const WrapperPage = styled.div.attrs({className: 'wrapper-page'})<{ isSelected?: boolean }>`
  height: 25px;
  width: 25px;
  color: var(--light-color);
  font-size: 15px;
  cursor: pointer;
  transition: box-shadow 0.5s ease-in-out;
  border-radius: 5px;
  line-height: 25px;
  text-align: center;
  box-shadow: ${props => props.isSelected ? '5px 5px 10px rgba(0, 0, 0, 0.47)' : 'none'};

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.47);
  }

`;


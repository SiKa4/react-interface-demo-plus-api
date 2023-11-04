import styled, {css} from "styled-components";
import {HTMLAttributes, useEffect, useState} from "react";

type DropDownMenu = HTMLAttributes<HTMLDivElement> & {
    callbackMethod: (id: number) => void;
    width?: number;
    contents: { id: number, name: string }[] | null | undefined;
    isStretching?: boolean;
};

export const DropDownMenu = ({callbackMethod, width, contents, isStretching}: DropDownMenu) => {
    const [selectedContent, setSelectedContent] =
        useState<{ id: number, name: string } | null>(null);
    const [isOpen, setInOpen] = useState(false);

    useEffect(() => {
        if (!contents) return;
        setSelectedContent(contents[0])
        callbackMethod(contents[0].id);
    }, [contents]);

    const onSelectedDropDownList = (content: {
        id: number,
        name: string
    }) => {
        setInOpen(false);
        callbackMethod(content.id);
        setSelectedContent(content);
    };

    return (
        <>
            <Wrapper width={width} onClick={() => setInOpen(!isOpen)}>
                {selectedContent?.name}
                <DropDownMenuButton isOpen={isOpen}><span>∨</span></DropDownMenuButton>
            </Wrapper>
            <DropdownList isOpen={isOpen} isStretching={isStretching}>
                {
                    contents?.map((x, i) => (
                        <DropdownListItem key={i} onClick={() => onSelectedDropDownList(x)}
                                          isSelected={selectedContent?.id == x.id}>{x.name}</DropdownListItem>
                    ))
                }
            </DropdownList>
        </>

    );
}

DropDownMenu.displayName = 'DropDownMenu'


const DropDownMenuButton = styled.div.attrs({className: 'drop-down-menu-button'})<{ isOpen: boolean }>`
  height: 100%;
  margin-left: auto;
  width: 30px;
  background-color: var(--line-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.isOpen ? 'none' : 'rotateX(180deg)'};
  }
`;

const Wrapper = styled.div.attrs({className: 'wrapper'})<{ width: number | undefined }>`
  border: rgba(101, 122, 157, 0.53) 2px solid;
  border-radius: 8px;
  height: 30px;
  width: ${props => props.width != undefined ? `${props.width}px` : `94.5%`};
  align-items: center;
  display: flex;
  padding-left: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const DropdownList = styled.ul<{
    isOpen: boolean,
    isStretching: boolean | undefined,
}>`
  position: ${props => props.isStretching ? 'relative' : 'fixed'};
  list-style: none;
  margin: 0;
  background-color: #f1f1f1;
  max-height: ${props => (props.isOpen ? '200px' : '0')};
  overflow: auto;
  transition: max-height 0.3s ease-in-out;
  border: ${props => (props.isOpen ? '#79747e 1px solid' : '0')};
  border-radius: 5px;
  padding: 0;
`;

const DropdownListItem = styled.li<{ isSelected: boolean }>`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  color: var(--line-color);
  font-size: 15px;

  &:hover {
    background-color: rgb(206, 206, 206);
  }

  &:last-child {
    border-bottom: none;
  }

  ${({isSelected}) => isSelected && css`
    background-color: rgb(178, 178, 178);;
  `}
`;
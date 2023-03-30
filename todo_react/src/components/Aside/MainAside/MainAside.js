/** @jsxImportSource @emotion/react */
import React from "react";
import { Navigation } from "react-minimal-side-navigation/lib";
import { useNavigate } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { HiHome } from "react-icons/hi";
import { BsCardChecklist } from "react-icons/bs";
import { BiUser } from 'react-icons/bi';
import * as S from "./style";
import { useState } from "react";


const MainAside = ({ chlidren }) => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const asideOpen = () => {
        setIsOpen(!isOpen);
    };

    const closeAside = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <aside css={isOpen? S.OpenAside: S.OutAside} onClick={closeAside}>
                <Navigation
                    activeItemId="/"
                    onSelect={({ itemId }) => {
                        navigate(itemId);
                    }}
                    items={[
                        {
                            title: "Home",
                            itemId: "/",
                            elemBefore: () => <HiHome />,
                        },
                        {
                            title: "User Information",
                            itemId: "/user",
                            elemBefore: () => <BiUser />,
                        },
                        {
                            title: "TodoList",
                            itemId: "/todo",
                            elemBefore: () => <BsCardChecklist />,
                        },
                    ]}
                />
                <button css={S.inOutButton} onClick={asideOpen}>{isOpen ? '▶': '◀' }</button>    
            </aside>
            
        </>
    );
};

export default MainAside;
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Header() {
    return (
        <HeaderWrap>
            <div className="header-inner">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login-form">Login</Link></li>
                        <li><Link to="/friends">Friends</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderWrap>
    )
}


const HeaderWrap = styled.div `
    display: flex;
    justify-content: flex-end;
    height: 50px;
    align-items: center;
    background-color: #222;

    nav {
        display: flex;
    }

    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        display: inline-block;
        padding: 5px 10px;
        margin-right: 1rem;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.3rem;
        color: #fff;
    }
`
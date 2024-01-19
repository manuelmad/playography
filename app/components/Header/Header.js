'use client';

import Image from 'next/image';
import Link from 'next/link';
import './header.css';
import React from 'react';

export default function Header() {
    // Code for the menu icon to show/hide the dropdown menu
    React.useEffect(()=> {
         const dropdown_menu = document.getElementById('dropdown_menu');
         dropdown_menu.style.display = 'none';
	},[]);

    // Function to show/hide the dropdown menu
    const interactiveMenu = ()=> {
        if(dropdown_menu.style.display == 'none') {
            dropdown_menu.style.display = 'block';
            menu_icon.style.color = '#66C4E3';
            menu_icon.style.backgroundColor = '#232A33';
        } else if(dropdown_menu.style.display == 'block') {
            dropdown_menu.style.display = 'none';
            menu_icon.style.color = '#ffffff';
            menu_icon.style.backgroundColor = '#2573da';
        }
    }

    return(
        <header>
             <section className="main-nav-bar" id="main_nav_bar">
                <div className="logo-container">
                    <Image
                        src="/imgs/logo.png"
                        alt="manuelmad Logo"
                        width={312}
                        height={107}
                    />
                </div>
                <div className="nav-bar-container">
                    <nav className="main-menu">
                        <ul>
                            <li className="list-item1">
                                <Link href="#aboutMe" id="home">INICIO</Link>
                            </li>
                            <li className="list-item2">
                                <Link href="#level1" id="trendy">LEVEL 1</Link>
                            </li>
                            <li className="list-item3">
                                <Link href="#level2">LEVEL 2</Link>
                            </li>
                            <li className="list-item4">
                                <Link href="#level3">LEVEL 3</Link>
                            </li>
                            <li className="list-item5">
                                <Link href="#level4">LEVEL 4</Link>
                            </li>
                            <li className="list-item6">
                                <Link href="#level5">LEVEL 5</Link>
                            </li>
                            <li className="list-item7">
                                <Link href="#level6">LEVEL 6</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="dropdown-menu-container">
                        <div className="menu-icon__container" id="menu_icon__container" onClick={interactiveMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" id="menu_icon" height="42" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        <nav id="dropdown_menu" className="dropdown-menu">
                            <ul id="dropdown-list">
                                <li>
                                    <Link href="#aboutMe" id="home2">INICIO</Link>
                                </li>
                                <li>
                                    <Link href="#level1">LEVEL 1</Link>
                                </li>
                                <li>
                                    <Link href="#level2">LEVEL 2</Link>
                                </li>
                                <li>
                                    <Link href="#level3">LEVEL 3</Link>
                                </li>
                                <li>
                                    <Link href="#level4">LEVEL 4</Link>
                                </li>
                                <li>
                                    <Link href="#level5">LEVEL 5</Link>
                                </li>
                                <li>
                                    <Link href="#level6">LEVEL 6</Link>
                                </li>
                                <li>
                                    <Link href="#level7">LEVEL 7</Link>
                                </li>
                                <li>
                                    <Link href="#level8">LEVEL 8</Link>
                                </li>
                                <li>
                                    <Link href="#level9">LEVEL 9</Link>
                                </li>
                                <li>
                                    <Link href="#finalThoughts">FINAL LEVEL</Link>
                                </li>
                                <li>
                                    <Link href="/references">REFERENCIAS</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    );
}
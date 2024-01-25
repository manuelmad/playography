'use client';

import Image from 'next/image';
import Link from 'next/link';
import './header.css';
import { useEffect } from 'react';

export default function Header(props) {
    // Code for the menu icon to show/hide the dropdown menu

    // Hidden by default
    useEffect(()=> {
         const dropdown_menu = document.getElementById('dropdown_menu');
         dropdown_menu.style.display = 'none';
	},[]);

    // Function to show/hide the dropdown menu
    const interactiveMenu = ()=> {
        if(dropdown_menu.style.display == 'none') {
            dropdown_menu.style.display = 'block';
            menu_icon.style.color = '#66C4E3';
        } else if(dropdown_menu.style.display == 'block') {
            dropdown_menu.style.display = 'none';
            menu_icon.style.color = '#ffffff';
            menu_icon.style.backgroundColor = '#1C3557';
        }
    }

    const onMenuItemClick = ()=> {
        dropdown_menu.style.display = 'none';
        menu_icon.style.color = '#ffffff';
        menu_icon.style.backgroundColor = '#1C3557';
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
                                <Link href={props.link1} id="home">INICIO</Link>
                            </li>
                            <li id='all_levels_container'>
                                <ul id='secondary_menu'>
                                    <li className="list-item2">
                                        <Link href={props.link2}>LEVEL 1</Link>
                                    </li>
                                    <li className="list-item3">
                                        <Link href={props.link3}>LEVEL 2</Link>
                                    </li>
                                    <li className="list-item4">
                                        <Link href={props.link4}>LEVEL 3</Link>
                                    </li>
                                    <li className="list-item5">
                                        <Link href={props.link5}>LEVEL 4</Link>
                                    </li>
                                    <li className="list-item6">
                                        <Link href={props.link6}>LEVEL 5</Link>
                                    </li>
                                    <li className="list-item7">
                                        <Link href={props.link7}>LEVEL 6</Link>
                                    </li>
                                    <li className="list-item8">
                                        <Link href={props.link8}>LEVEL 7</Link>
                                    </li>
                                    <li className="list-item9">
                                        <Link href={props.link9}>LEVEL 8</Link>
                                    </li>
                                    <li className="list-item10">
                                        <Link href={props.link10}>LEVEL 9</Link>
                                    </li>
                                </ul>
                                LEVELS
                            </li>
                            {/* <li className="list-item2">
                                <Link href={props.link2}>LV-1</Link>
                            </li>
                            <li className="list-item3">
                                <Link href={props.link3}>LV-2</Link>
                            </li>
                            <li className="list-item4">
                                <Link href={props.link4}>LV-3</Link>
                            </li>
                            <li className="list-item5">
                                <Link href={props.link5}>LV-4</Link>
                            </li>
                            <li className="list-item6">
                                <Link href={props.link6}>LV-5</Link>
                            </li>
                            <li className="list-item7">
                                <Link href={props.link7}>LV-6</Link>
                            </li>
                            <li className="list-item8">
                                <Link href={props.link8}>LV-7</Link>
                            </li>
                            <li className="list-item9">
                                <Link href={props.link9}>LV-8</Link>
                            </li>
                            <li className="list-item10">
                                <Link href={props.link10}>LV-9</Link>
                            </li>
                            <li className="list-item11">
                                <Link href={props.link11}>FINAL LEVEL</Link>
                            </li>
                            <li className="list-item12">
                                <Link href={props.link12}>REFERENCIAS</Link>
                            </li> */}
                            <li className="list-item11">
                                <Link href={props.link11}>FINAL LEVEL</Link>
                            </li>
                            <li className="list-item12">
                                <Link href={props.link12}>REFERENCIAS</Link>
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
                                    <Link href={props.link1} id="home2" onClick={onMenuItemClick}>INICIO</Link>
                                </li>
                                <li>
                                    <Link href={props.link2} onClick={onMenuItemClick}>LEVEL 1</Link>
                                </li>
                                <li>
                                    <Link href={props.link3} onClick={onMenuItemClick}>LEVEL 2</Link>
                                </li>
                                <li>
                                    <Link href={props.link4} onClick={onMenuItemClick}>LEVEL 3</Link>
                                </li>
                                <li>
                                    <Link href={props.link5} onClick={onMenuItemClick}>LEVEL 4</Link>
                                </li>
                                <li>
                                    <Link href={props.link6} onClick={onMenuItemClick}>LEVEL 5</Link>
                                </li>
                                <li>
                                    <Link href={props.link7} onClick={onMenuItemClick}>LEVEL 6</Link>
                                </li>
                                <li>
                                    <Link href={props.link8} onClick={onMenuItemClick}>LEVEL 7</Link>
                                </li>
                                <li>
                                    <Link href={props.link9} onClick={onMenuItemClick}>LEVEL 8</Link>
                                </li>
                                <li>
                                    <Link href={props.link10} onClick={onMenuItemClick}>LEVEL 9</Link>
                                </li>
                                <li>
                                    <Link href={props.link11} onClick={onMenuItemClick}>FINAL LEVEL</Link>
                                </li>
                                <li>
                                    <Link id='ref2' href={props.link12} onClick={onMenuItemClick}>REFERENCIAS</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    );
}
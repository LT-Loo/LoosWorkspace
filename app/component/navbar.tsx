// Navigation Bar

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    
    const page = usePathname();

    return (
        <nav className = "navbar fixed-top" data-bs-theme = "dark">
            <div className = "container-fluid">
                <div className  ="navbar-expand mx-auto">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            {
                                page == "/" ?
                                <Link className = "nav-link active" href = {{ pathname: "/" }}><b>HOME</b></Link>
                                : <Link className = "nav-link" href = {{ pathname: "/" }}>HOME</Link>
                            }
                        </li>
                        <li className = "nav-item">
                            {
                                page == "/about" ?
                                <Link className = "nav-link active" href = {{ pathname: "/about" }}><b>ABOUT</b></Link>
                                : <Link className = "nav-link" href = {{ pathname: "/about" }}>ABOUT</Link>
                            }
                        </li>
                        <li className = "nav-item">
                            {
                                page == "/projects" ?
                                <Link className = "nav-link active" href = {{ pathname: "/projects" }}><b>PROJECTS</b></Link>
                                : <Link className = "nav-link" href = {{ pathname: "/projects" }}>PROJECTS</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
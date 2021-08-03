import React from "react";

export default function NavBar(props) {
    return (
        <ul>
            <li onClick= {()=>props.setPage(props.components[0])}>
               About Me
            </li>
            <li onClick= {()=>props.setPage(props.components[1])}>
               Projects
            </li>
            <li onClick= {()=>props.setPage(props.components[2])}>
                Contact
            </li>
        </ul>
    )
}
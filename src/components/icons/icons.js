import React from 'react'

export const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "24"}
         height={props.height ? props.height : "24"} viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
         fill={props.fill ? props.fill : "var(--gray)"}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
);

export const BackIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "24"} height={props.height ? props.height : "24"} viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
         fill={props.fill ? props.fill : "var(--gray)"}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
    </svg>
);

export const FavoriteIconEmpty = (props) => (

    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "24"} height={props.size ? props.size : "24"} viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
    </svg>
)

export const FavoriteIconFull = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "24"} height={props.size ? props.size : "24"} viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
)
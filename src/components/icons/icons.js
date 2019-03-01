import React from "react";

export const MenuIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    style={props.style}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export const BackIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    style={props.style}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
  </svg>
);

export const FavoriteIconEmpty = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    style={props.style}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
  </svg>
);

export const FavoriteIconFull = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    style={props.style}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const ChevronIconRight = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--gray)"}
    style={props.style}
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

export const RoundCheckIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "24"}
    height={props.height ? props.height : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--grey-level-three)"}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z" />
  </svg>
);

export const RoundCloseIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--grey-level-three)"}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M13.89 8.7L12 10.59 10.11 8.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l1.89-1.89c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.38-1.41 0zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export const MessageIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--grey-level-three)"}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z" />
  </svg>
);

export const StarIconFull = props => (
  <svg
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--grey-level-three)"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2934 14.689L13.0923 16.9468C13.5361 17.3126 14.1391 16.8207 13.9684 16.2405L12.8989 12.5952L15.6637 10.4131C16.1188 10.06 15.8913 9.26532 15.3338 9.26532H11.9432L10.8395 5.45609C10.6689 4.87588 9.92931 4.87588 9.75865 5.45609L8.64362 9.26532H5.25305C4.69554 9.26532 4.46798 10.06 4.92309 10.4131L7.68789 12.5952L6.61838 16.2405C6.44771 16.8207 7.05074 17.3 7.49447 16.9468L10.2934 14.689Z"
      fill={props.fill ? props.fill : "var(--grey-level-three)"}
    />
  </svg>
);



export const ArrowLeftIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path opacity=".87" fill="none" d="M0 0h24v24H0V0z" />
    <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
  </svg>
);


export const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size ? props.size : "24"} height={props.size ? props.size : "24"} viewBox={props.viewBox ? props.viewBox : "0 0 24 24"} fill={props.fill ? props.fill : "var(--gray)"} style={props.style}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
)

export const ArrowRightIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--gray)"}
  >
    <path opacity=".87" fill="none" d="M24 24H0V0h24v24z" />
    <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
  </svg>
);


export const OpenNewTabIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ? props.size : "24"}
    height={props.size ? props.size : "24"}
    viewBox={props.viewBox ? props.viewBox : "0 0 24 24"}
    fill={props.fill ? props.fill : "var(--gray)"}
    style={props.style}
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z" />
  </svg>
);

export const Location = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export const Verified = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

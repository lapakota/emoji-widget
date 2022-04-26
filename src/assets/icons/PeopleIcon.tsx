import React from 'react';

type propsType = {
    color: string;
};

const PeopleIcon = (props: propsType) => {
    return (
        <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.30109 13.0012C7.07344 14.7578 8.98814 16 10.9996 16C13.0025 16 14.9135 14.7546 15.6925 13.0055"
                stroke={props.color}
                strokeLinecap="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
                fill={props.color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 9C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9Z"
                fill={props.color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                stroke={props.color}
            />
        </svg>
    );
};

export default PeopleIcon;
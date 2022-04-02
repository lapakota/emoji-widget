import React from 'react';

type propsType = {
    color: string;
};

const ObjectsIcon = (props: propsType) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                x="1"
                y="1"
                width="20"
                height="14"
                stroke={props.color}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M1 1L11 10L21 1" stroke={props.color} />
            <path d="M1 15L8 7" stroke={props.color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M21 15L14 7L21 15Z" stroke={props.color} />
        </svg>
    );
};

export default ObjectsIcon;
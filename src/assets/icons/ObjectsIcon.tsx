import React from 'react';

type propsType = {
    color: string;
};

const ObjectsIcon = (props: propsType) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="20" height="16" stroke={props.color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 1L11 11.2857L21 1" stroke={props.color}/>
            <path d="M1 17L8 7.85712" stroke={props.color}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M21 17L14 7.85712L21 17Z" stroke={props.color}/>
        </svg>
    );
};

export default ObjectsIcon;
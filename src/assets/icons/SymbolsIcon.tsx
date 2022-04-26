import React from 'react';

type propsType = {
    color: string;
};

const SymbolsIcon = (props: propsType) => {
    return (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L3 19" stroke={props.color} strokeLinecap="round" />
            <path d="M17 1L11 19" stroke={props.color} strokeLinecap="round" />
            <path d="M1 14H17" stroke={props.color} strokeLinecap="round" />
            <path d="M3 6H19" stroke={props.color} strokeLinecap="round" />
        </svg>
    );
};

export default SymbolsIcon;
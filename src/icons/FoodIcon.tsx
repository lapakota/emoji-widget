import React from 'react';

type propsType = {
    color: string
}

const FoodIcon = (props: propsType) => {
    return (
        <svg width='18' height='21' viewBox='0 0 18 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 10H13V15C13 17.7614 10.7614 20 8 20H6C3.23858 20 1 17.7614 1 15V10Z' stroke={props.color} />
            <path d='M13 11H15C16.1046 11 17 11.8954 17 13V13C17 14.1046 16.1046 15 15 15H13' stroke={props.color} />
            <path d='M5 7C5 7 4 6.5 4 5C4 3.5 5 3 5 3' stroke={props.color} strokeLinecap='round' />
            <path d='M8 1C8 1 9 1.5 9 3C9 4.5 8 5 8 5' stroke={props.color} strokeLinecap='round' />
        </svg>
    );
};

export default FoodIcon;
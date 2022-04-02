import React from 'react';

type propsType = {
    color: string;
};

const FoodIcon = (props: propsType) => {
    return (
        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17 14.8564C14.5677 16.2607 11.8086 17 9 17C6.19141 17 3.43231 16.2607 1 14.8564L9 1L17 14.8564Z"
                stroke={props.color}
                strokeWidth="0.8"
            />
            <path
                d="M2.4989 12.2603C4.41127 13.3667 6.63167 14 8.99998 14C11.3683 14 13.5887 13.3667 15.5011 12.2603"
                stroke={props.color}
                strokeWidth="0.8"
            />
            <circle cx="7" cy="11" r="0.8" fill={props.color} />
            <circle cx="10" cy="10" r="0.8" fill={props.color} />
            <circle cx="9" cy="7" r="0.8" fill={props.color} />
        </svg>
    );
};

export default FoodIcon;
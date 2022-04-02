import React from 'react';

type propsType = {
    color: string
}

const NatureIcon = (props: propsType) => {
    return (
        <svg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M11 14C13.2091 14 15 12.2091 15 10C15 7.79086 13.2091 6 11 6C8.79086 6 7 7.79086 7 10C7 12.2091 8.79086 14 11 14Z'
                  stroke={props.color} />
            <path d='M11 3V1' stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
            <path d='M11 19V17' stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M4 10H1H4Z' stroke={props.color} strokeLinecap='round'
                  strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M21 10H18H21Z' stroke={props.color} strokeLinecap='round'
                  strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M15.9497 5.05024L18.071 2.92892L15.9497 5.05024Z'
                  stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M3.92896 17.0711L6.05028 14.9498L3.92896 17.0711Z'
                  stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M15.9497 14.9498L18.071 17.0711L15.9497 14.9498Z'
                  stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
            <path fillRule='evenodd' clipRule='evenodd' d='M3.92896 2.92892L6.05028 5.05024L3.92896 2.92892Z'
                  stroke={props.color} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
};

export default NatureIcon;
import React from 'react';

type propsType = {
    color: string;
};

const TravelIcon = (props: propsType) => {
    return (
        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.3937 1.3638L11 4L3 2L2 3L7.5 7.5L5 11H2L1 12L3.5 13.5L4.5 14.5L6 17L7 16V13L10.5 10.5L15 16L16 15L14 7L16.6362 2.60634C16.85 2.24999 16.7939 1.79385 16.5 1.5C16.2061 1.20615 15.75 1.14999 15.3937 1.3638Z"
                stroke={props.color}
            />
        </svg>
    );
};

export default TravelIcon;
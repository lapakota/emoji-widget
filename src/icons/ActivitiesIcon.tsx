import React from 'react';

type propsType = {
    color: string
}

const ActivitiesIcon = (props: propsType) => {
    return (
        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M2.00476 6.71679C5.03818 5.81596 8.99791 6.74848 12.2448 9.43155C15.5425 12.1567 17.2053 15.9443 16.8244 19.1241'
                stroke={props.color} />
            <path
                d='M9.10201 20.7996C8.33939 18.3589 9.0106 14.6138 11.0776 11.0336C13.1385 7.46408 16.0351 5.01419 18.5251 4.44469'
                stroke={props.color} />
            <path
                d='M10.4419 1C10.2615 2.94419 9.5157 5.2298 8.22539 7.46468C6.29156 10.8142 3.64751 13.1615 1.40133 13.7854'
                stroke={props.color} />
            <circle cx='11' cy='11' r='10' stroke={props.color} />
        </svg>
    );
};

export default ActivitiesIcon;
import React from 'react';

type propsType = {
    color: string;
};

const FavoriteIcon = (props: propsType) => {
    return (
        <svg width="24" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 19L9.55 17.7052C4.4 13.1243 1 10.103 1 6.3951C1 3.37384 3.42 1 6.5 1C8.24 1 9.91 1.79455 11 3.05014C12.09 1.79455 13.76 1 15.5 1C18.58 1 21 3.37384 21 6.3951C21 10.103 17.6 13.1243 12.45 17.715L11 19Z"
                stroke={props.color}
            />
        </svg>
    );
};

export default FavoriteIcon;
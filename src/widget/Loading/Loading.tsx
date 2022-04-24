import React, { useContext } from 'react';
import './Loading.scss';
import cn from 'classnames';
import { CurrentThemeContext } from "../Widget/Widget";

const Loading: React.FC = () => {
    const { isLightTheme } = useContext(CurrentThemeContext);

    return (
        <div className={cn('lds-default', isLightTheme ? 'light-lds' : 'dark-lds')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;
import React, { useContext } from 'react';
import './Loading.scss';
import { CurrentThemeContext } from '../../App';
import cn from 'classnames';

const Loading: React.FC = () => {
    const isLightTheme = useContext(CurrentThemeContext);

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
import React, {useContext} from 'react';
import "./Settings.scss";
import {NavLink} from "react-router-dom";
import {CurrentThemeContext, ChangeThemeContext} from '../App';
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

const Settings = () => {
  const currentTheme = useContext(CurrentThemeContext);

  return (
    <div className={'Settings'} style={currentTheme.body}>
      <div className={'header'}>
        <NavLink to={'/widget'}>
          <ArrowLeftIcon color={currentTheme.arrow.color}/>
        </NavLink>
        <div style={currentTheme.text}>Go back</div>
      </div>
      <div className={'settings_menu'}>
        <div className={'settings_item'}>
          <div style={currentTheme.text}>Dark theme</div>
          <ChangeThemeContext.Consumer>
            {dispatchChangeTheme =>
              <button onClick={() => dispatchChangeTheme()}>change theme</button>}
          </ChangeThemeContext.Consumer>
        </div>
      </div>
    </div>
  );
}

export default Settings;
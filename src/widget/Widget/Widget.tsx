import React, { useContext, useEffect, useState } from 'react';
import ChangeGroupButton from '../ChangeGroupButton/ChangeGroupButton';
import './Widget.scss';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import NatureIcon from '../../assets/icons/NatureIcon';
import FoodIcon from '../../assets/icons/FoodIcon';
import ActivitiesIcon from '../../assets/icons/ActivitiesIcon';
import TravelIcon from '../../assets/icons/TravelIcon';
import ObjectsIcon from '../../assets/icons/ObjectsIcon';
import SymbolsIcon from '../../assets/icons/SymbolsIcon';
import { emojiGroups, Groups } from '../../utils/emojiGroups';
import { emojisData, EmojiType } from '../../utils/emojisData';
import SettingsGroup from '../WidgetGroups/SettingsGroup/SettingsGroup';
import BasicGroup from '../WidgetGroups/BasicGroup';
import FavouritesGroup from '../WidgetGroups/FavouritesGroup/FavouritesGroup';
import ContextMenu from '../ContextMenu/ContextMenu';
import cn from 'classnames';
import { FirebaseContext } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { StatesKeys } from '../../utils/enums';
import { BLACK_COLOR, FAVOURITES_COUNT, RECENT_COUNT, WHITE_COLOR } from '../../utils/constants';
import { CurrentEmojiSchemeContext, CurrentThemeContext } from '../../contexts';
import { saveToLocalStorage } from '../../utils/localStorageSaver';
import { getFromFirebase, saveToFirebase } from '../../utils/firebase';

const Widget: React.FC = () => {
    const { firestore } = useContext(FirebaseContext);
    const { auth } = useContext(FirebaseContext);

    const [isLightTheme, setIsLightTheme] = useState<boolean>(loadWidgetState(StatesKeys.IsLightTheme, true));
    const [emojiScheme, setEmojiScheme] = useState<number>(loadWidgetState(StatesKeys.EmojiScheme, 0));

    const [currentGroupName, setCurrentGroupName] = useState<Groups>(
        loadWidgetState(StatesKeys.CurrentGroupName, Groups.Emotion)
    );
    const [currentGroupEmojis, setCurrentGroupEmojis] = useState<EmojiType[]>(emojisData[currentGroupName]);
    const [recentEmojis, setRecentEmojis] = useState<EmojiType[]>(loadWidgetState(StatesKeys.RecentEmojis, []));
    const [favouritesEmojis, setFavouritesEmojis] = useState<EmojiType[]>(
        loadWidgetState(StatesKeys.FavouritesEmojis, [])
    );

    const [inputText, setInputText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchedEmojis, setSearchedEmojis] = useState<EmojiType[]>([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            getFromFirebase(firestore, user).then(data => {
                onReceiveDataFromFirebase(data);
            });
        }
    }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        saveToLocalStorage(currentGroupName, recentEmojis, favouritesEmojis, isLightTheme, emojiScheme);
    }, [currentGroupName, recentEmojis, favouritesEmojis, isLightTheme, emojiScheme]);

    useEffect(() => {
        if (user) {
            saveToFirebase(firestore, user, recentEmojis, favouritesEmojis, emojiScheme, isLightTheme).then(_ =>
                console.log('Saved to firebase')
            );
        }
    }, [recentEmojis, favouritesEmojis, isLightTheme, emojiScheme]); // eslint-disable-line react-hooks/exhaustive-deps

    function loadWidgetState(key: string, defaultValue: any) {
        const state = JSON.parse(localStorage.getItem(key) as string);
        if (state !== null && typeof state !== 'undefined') return state;
        return defaultValue;
    }

    function onReceiveDataFromFirebase(data: any) {
        const scheme = data.get(StatesKeys.EmojiScheme);
        const light = data.get(StatesKeys.IsLightTheme);
        const favourites = data.get(StatesKeys.FavouritesEmojis);
        const recent = data.get(StatesKeys.RecentEmojis);
        // user already exist
        if (scheme !== null) {
            setEmojiScheme(scheme);
            setIsLightTheme(light);
            setFavouritesEmojis(favourites);
            setRecentEmojis(recent);
        } else {
            saveToFirebase(firestore, user, recentEmojis, favouritesEmojis, emojiScheme, isLightTheme).then(_ =>
                console.log('Saved to firebase after creating account')
            );
        }
    }

    const getNewEmojisStateAfterAdding = (prevState: EmojiType[], emoji: EmojiType, limit: number) => {
        const newState: EmojiType[] = JSON.parse(JSON.stringify(prevState));

        const emojiIndex = newState.findIndex(e => e.char === emoji.char);
        emojiIndex !== -1 && newState.splice(emojiIndex, 1);

        newState.unshift(emoji);

        newState.length > limit && newState.pop();
        return newState;
    };

    const updateRecentEmojis = (emoji: EmojiType) => {
        setRecentEmojis(prevState => getNewEmojisStateAfterAdding(prevState, emoji, RECENT_COUNT));
    };

    const addFavouriteEmoji = (emoji: EmojiType) => {
        setFavouritesEmojis(prevState => getNewEmojisStateAfterAdding(prevState, emoji, FAVOURITES_COUNT));
    };

    const removeFavouriteEmoji = (emoji: EmojiType) => {
        setFavouritesEmojis(prevState => prevState.filter(x => x.char !== emoji.char));
    };

    const changeCurrentGroupData = (newGroupName: Groups) => () => {
        if (newGroupName === currentGroupName) return;

        setInputText('');
        setIsSearching(false);
        setCurrentGroupEmojis(emojisData[newGroupName]);
        setCurrentGroupName(newGroupName);
    };

    const updateSearchedGroup = (emojis: EmojiType[]) => {
        setSearchedEmojis(emojis);
    };

    function getCurrentIconColor() {
        return isLightTheme ? BLACK_COLOR : WHITE_COLOR;
    }

    const icons = [
        <FavoriteIcon color={getCurrentIconColor()} />,
        <PeopleIcon color={getCurrentIconColor()} />,
        <NatureIcon color={getCurrentIconColor()} />,
        <FoodIcon color={getCurrentIconColor()} />,
        <ActivitiesIcon color={getCurrentIconColor()} />,
        <TravelIcon color={getCurrentIconColor()} />,
        <ObjectsIcon color={getCurrentIconColor()} />,
        <SymbolsIcon color={getCurrentIconColor()} />,
        <SettingsIcon color={getCurrentIconColor()} />
    ];
    return (
        <CurrentThemeContext.Provider
            value={{
                [StatesKeys.IsLightTheme]: isLightTheme,
                dispatchChangeTheme: (value: boolean) => setIsLightTheme(value)
            }}
        >
            <CurrentEmojiSchemeContext.Provider
                value={{
                    [StatesKeys.EmojiScheme]: emojiScheme,
                    dispatchChangeEmojiScheme: (value: number) => setEmojiScheme(value)
                }}
            >
                <div className={cn('widget', isLightTheme ? 'light-widget' : 'dark-widget')}>
                    <div className={'buttons-wrapper'}>
                        {icons.map((icon, index) => (
                            <ChangeGroupButton
                                key={`ChangeGroupButton${index}`}
                                groupName={emojiGroups[index]}
                                icon={icon}
                                onClick={changeCurrentGroupData(emojiGroups[index])}
                                isActive={emojiGroups[index] === currentGroupName}
                            />
                        ))}
                    </div>
                    {currentGroupName === Groups.Favourites ? (
                        <FavouritesGroup
                            recentEmojis={recentEmojis}
                            favouritesEmojis={favouritesEmojis}
                            updateSearchedGroup={updateSearchedGroup}
                            updateRecentEmojis={updateRecentEmojis}
                            isSearching={isSearching}
                            setIsSearching={setIsSearching}
                            inputText={inputText}
                            setInputText={setInputText}
                            searchedEmojis={searchedEmojis}
                        />
                    ) : currentGroupName === Groups.Settings ? (
                        <SettingsGroup />
                    ) : (
                        <BasicGroup
                            groupName={isSearching ? Groups.Searched : currentGroupName}
                            groupEmojis={isSearching ? searchedEmojis : currentGroupEmojis}
                            updateSearchedGroup={updateSearchedGroup}
                            updateRecentEmojis={updateRecentEmojis}
                            setIsSearching={setIsSearching}
                            inputText={inputText}
                            setInputText={setInputText}
                        />
                    )}
                    <ContextMenu
                        addFavourite={addFavouriteEmoji}
                        removeFavourite={removeFavouriteEmoji}
                        updateRecent={updateRecentEmojis}
                    />
                </div>
            </CurrentEmojiSchemeContext.Provider>
        </CurrentThemeContext.Provider>
    );
};

export default Widget;
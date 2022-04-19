import React, { useContext } from 'react';
import { FirebaseContext } from '../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import './Auth.scss';
import { CurrentThemeContext } from '../../App';
import cn from 'classnames';
import Loading from '../Loading/Loading';

const Auth: React.FC = () => {
    const isLightTheme = useContext(CurrentThemeContext);
    const { auth } = useContext(FirebaseContext);
    const [user, loading] = useAuthState(auth);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        console.log(user);
    };

    const logOut = async () => {
        await signOut(auth).catch(e => console.log(e));
    };

    const createTabWithGoogleAccount = () => {
        chrome.tabs.create({ url: 'https://myaccount.google.com/' }).catch(e => console.error(e));
    };

    if (loading) {
        return (
            <div className={'auth'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loading />
            </div>
        );
    }

    return (
        <div className={'auth'}>
            {user && (
                <div className={'user-info'}>
                    <div className={'user-info_name'}>{user.displayName}</div>
                    <img
                        className={'user-info_image'}
                        src={user.photoURL as string}
                        alt={'user avatar'}
                        onClick={createTabWithGoogleAccount}
                    />
                </div>
            )}
            {user ? (
                <button className={'logOut_button'} onClick={logOut}>
                    Log out
                </button>
            ) : (
                <button className={cn('login_button', isLightTheme ? 'light-login' : 'dark-login')} onClick={login}>
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt={'google icon'}
                        />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </button>
            )}
        </div>
    );
};

export default Auth;
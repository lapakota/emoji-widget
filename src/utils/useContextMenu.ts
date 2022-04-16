import { useEffect, useCallback, useState } from 'react';

const useContextMenu = () => {
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleContextMenu = useCallback(
        event => {
            event.preventDefault();
            setAnchorPoint({ x: event.pageX, y: event.pageY });
            setShow(true);
        },
        [setShow, setAnchorPoint]
    );

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
        const emojiGroups = Array.from(document.querySelectorAll('.emoji-group'));
        document.addEventListener('click', handleClick);
        emojiGroups?.map(x => x.addEventListener('contextmenu', handleContextMenu));
        return () => {
            document.removeEventListener('click', handleClick);
            emojiGroups?.map(x => x.removeEventListener('contextmenu', handleContextMenu));
        };
    });
    return { anchorPoint, show };
};

export default useContextMenu;
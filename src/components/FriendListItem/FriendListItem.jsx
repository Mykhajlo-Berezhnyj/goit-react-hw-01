import css from './FriendListItem.module.css'

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <li className={css.friendListItem}>
            <img className={css.imgFriends} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={isOnline? css.isOnline : css.offline}>{isOnline? "Online": "Offline"}</p>
        </li>
    );
};
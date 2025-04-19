import Profile from "../Profile/Profile";
import css from "./Stats.module.css";

export default function Stats({ followers, views, likes }) {
    return (
        <ul className={css.stats}>
            <li className={css['stats-item']}>
                <span>Followers</span>
                <span className={css.statistic}>{followers}</span>
            </li>
            <li className={css['stats-item']}>
                <span>Views</span>
                <span className={css.statistic}>{views}</span>
            </li>
            <li className={css['stats-item']}>
                <span>Likes</span>
                <span className={css.statistic}>{likes}</span>
            </li>
        </ul>
    );
};
import Profile from "./Profile";
import css from "./Stats.module.css";

export default function Stats({ followers, views, likes }) {
    return (
        <ul className={css.stats}>
            <li>
                <span>Followers</span>
                <span className={css.statistic}>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span className={css.statistic}>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span className={css.statistic}>{likes}</span>
            </li>
        </ul>
    );
};
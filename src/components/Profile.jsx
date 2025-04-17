import Stats from "./Stats";
import css from "./Profile.module.css"

export default function Profile({ image, name, tag, location, stats }) {
    return (
      <div className={css.profile}>
        <img src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
        <Stats{ ...stats } ></Stats>
      </div>
    );
}
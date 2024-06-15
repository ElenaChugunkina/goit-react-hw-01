import css from "./Profile.module.css";

const Profile = ({image, name, tag, location, stats}) => {
return (
    <div className={css.container}>
  <div>
    <img className={css.image}
      src={image}
      alt="User avatar"
width = "200px"
    />
    <p className={css.name}>{name}</p>
    <p className={css.mailStyle}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.style}>
      <span className={css.followers}>Followers </span>
      <span className={css.value}>{stats.followers}</span>
    </li>
    <li className={css.style}>
      <span className={css.followers}>Views </span>
      <span className={css.value}>{stats.views}</span>
    </li>
    <li className={css.style}>
      <span className={css.followers}>Likes </span>
      <span className={css.value}>{stats.likes}</span>
    </li>
  </ul>
</div>

)

}




export default Profile;
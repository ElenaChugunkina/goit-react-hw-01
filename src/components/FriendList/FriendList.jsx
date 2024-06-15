import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css'



const FriendList = ({ friends }) => {
    return (
      <ul className={css.container}>
        {friends.map((friend) => {
            return (
          <li className={css.listStyle} key={friend.id}>
            <FriendListItem 
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>)
})}
      </ul>
    );
  };




export default FriendList;
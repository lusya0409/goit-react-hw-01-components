import { FrendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FrendListItem key={friend.id} friend={friend} />
      ))}
    </List>
  );
};

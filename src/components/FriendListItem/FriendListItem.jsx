import {
  FriendName,
  ImageWrapper,
  ListItem,
  StatusOnLine,
} from './FriendListItem.styled';

export const FrendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <StatusOnLine $_isonline={isOnline}></StatusOnLine>
      <ImageWrapper>
        <img src={avatar} alt={name} width={48} />
      </ImageWrapper>
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};

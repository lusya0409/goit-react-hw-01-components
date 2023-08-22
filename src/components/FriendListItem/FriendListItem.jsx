import {
  FriendName,
  ImageWrapper,
  ListItem,
  StatusOnLine,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

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

FrendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

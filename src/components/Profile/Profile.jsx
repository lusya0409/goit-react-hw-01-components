import PropTypes from 'prop-types';
import {
  WrapperProfile,
  Description,
  ImageWrapper,
  UserName,
  ListStats,
  Item,
  ItemQuantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <WrapperProfile>
      <Description>
        <ImageWrapper>
          <img src={avatar} alt={username} />
        </ImageWrapper>
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <ListStats>
        <Item>
          <span>Followers</span>
          <ItemQuantity>{followers}</ItemQuantity>
        </Item>
        <Item>
          <span>Views</span>
          <ItemQuantity>{views}</ItemQuantity>
        </Item>
        <Item>
          <span>Likes</span>
          <ItemQuantity>{likes}</ItemQuantity>
        </Item>
      </ListStats>
    </WrapperProfile>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

import PT from 'prop-types';
import { ItemCSS, ImageCSS, StatusCSS, NameCSS } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Friends List
      </h2>
      <ul className="friend-list">
        {friends.map(el => (
          <ItemCSS key={el.id}>
            <StatusCSS>{el.isOnline}</StatusCSS>
            <ImageCSS src={el.avatar} alt="User avatar" width="48" />
            <NameCSS isOnline={el.isOnline}>{el.name}</NameCSS>
          </ItemCSS>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  data: PT.arrayOf(
    PT.shape({
      id: PT.number,
      isOnline: PT.bool,
      avatar: PT.string,
      name: PT.string,
    })
  ),
};

export default FriendList;

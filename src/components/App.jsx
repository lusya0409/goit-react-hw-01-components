import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />

      <GlobalStyle />
    </Layout>
  );
};

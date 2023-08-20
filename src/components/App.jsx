// import { QuizForm } from './QuizForm/QuizForm';
// import { QuizList } from './QuizList/QuizList';
// import { SearchBar } from './SearchBar/SearchBar';
// import quizItems from '../quiz-items.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <GlobalStyle />
    </Layout>
  );
};

import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearchClass from './classes/UserSearch';
import UserSearchRef from './refs/UserSearchRef';

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <>
    <hr />
    <GuestList />
  </>,
  document.getElementById('state')
);

ReactDOM.render(
  <>
    <hr />
    <UserSearch />
  </>,
  document.getElementById('state-search')
);

ReactDOM.render(
  <>
    <hr />
    <EventComponent />
  </>,
  document.getElementById('event')
);

const USERS = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

ReactDOM.render(
  <>
    <hr />
    <UserSearchClass users={USERS} />
  </>,
  document.getElementById('class')
);

ReactDOM.render(
  <>
    <hr />
    <UserSearchRef />
  </>,
  document.getElementById('refs')
);

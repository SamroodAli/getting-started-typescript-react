import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <>
    <hr />
    <GuestList />
  </>,
  document.getElementById("state")
);

ReactDOM.render(
  <>
    <hr />
    <UserSearch />
  </>,
  document.getElementById("state-search")
);

ReactDOM.render(
  <>
    <hr />
    <EventComponent />
  </>,
  document.getElementById("event")
);

import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <h1>Hi there</h1>
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

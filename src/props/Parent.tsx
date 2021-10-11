import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log("Hi from parent");
      }}
    >
      Hello world
    </ChildAsFC>
  );
};

export default Parent;

import { Component } from "react";

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[];
}

class UserSearch extends Component<UserSearchProps> {
  render() {
    return <div>Hello world</div>;
  }
}

export default UserSearch;

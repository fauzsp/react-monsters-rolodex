import React from "react";
import logo from "./logo.svg";
import { CardsList } from "./components/cards-list/cards-list.component.jsx";
import SearcBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((user) => this.setState({ monsters: user }))
    );
  }
  render() {
    // function addArr(param) {
    //   param.push({ id: 4, name: "Ghost" });
    //   return param;
    // }
    // addArr(this.state.monsters);

    const filterSearch = (e) => {
      setTimeout(() => {
        this.setState({ searchField: e.target.value });
        return this.state.searchField;
      }, 2000);
    };
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <div>
          <h1>Monsters Rolodex</h1>
        </div>
        <SearcBox
          placeholder="search monsters"
          handleChange={filterSearch}
        ></SearcBox>
        <CardsList monsters={filteredMonsters} />
        <div>{this.state.searchField}</div>
      </div>
    );
  }
}
export default App;

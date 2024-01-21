import React from 'react';
import Users from "./components/Users";
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [],
    };
  }

  render() {
    return (
      <>
      <img src="https://png2.cleanpng.com/sh/64b069854846774047bfb31fe7664e15/L0KzQYm3WcI5N6J2jZH0aYP2gLBuTgZma6V0ip9wcnHzeLrqk71qdJ16iAZ7YYTsf7A0gB9ueKZ5feQ2aXPyfsS0gfRlepZ4RdNwZX7ncX7tkvVmNZN6i9t3ZYP2PbrqjB50NWZnedZsZUi0doLoUcI2NmM4TKsDM0C0QYa6WMEyP2M5UasDOUexgLBu/kisspng-vector-graphics-illustration-computer-icons-addres-agenda-free-business-icons-5badce81f1a125.2349830115381172499897.png" alt="111" />
      <h1>Address Book</h1>
      <Users />
      </>
    );
  }
}

export default App;






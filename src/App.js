import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    };
  }
  componentDidMount() {
    const URL = "https://www.themealdb.com/api/json/v1/1/latest.php";
    axios
      .get(URL)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === "object") {
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var data = this.state.meal;
    return (
      <div>
        <Navigation />
        <AppContainer className="App">
          {data.length > 0 && <RecipeCard meals={data} />}
        </AppContainer>
      </div>
    );
  }
}

const AppContainer = styled.div`
  background: #ddd;
  padding: 2em;
`;

export default App;

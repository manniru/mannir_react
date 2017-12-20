import React, { Component } from "react";
import { render } from "react-dom";
import AsyncStorage from "@callstack/async-storage";
import styled from "styled-components";

import Button from "material-ui/Button";
import Input from "material-ui/Input";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";

class AsyncStorageExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryText: "",
      tasks: []
    };
  }

  componentWillMount() {
    AsyncStorage.getItem("tasks").then(tasks => {
      if (tasks) {
        this.setState(() => ({
          tasks: tasks.split(",")
        }))
      }
    });
  }

  setQueryText = event => {
    this.setState({ queryText: event.target.value });
  };

  setTask = async () => {
    if (this.state.queryText !== "") {
      const newTasks = this.state.tasks.concat(this.state.queryText);
      await AsyncStorage.setItem("tasks", newTasks);
      this.setState(() => ({
        tasks: newTasks,
        queryText: ""
      }));
    }
  };

  removeItem = async task => {
    const filteredTasks = this.state.tasks.filter(item => item !== task);
    await AsyncStorage.setItem("tasks", filteredTasks);
    this.setState(() => ({
      tasks: filteredTasks
    }));
  };

  removeAllTasks = () => {
    AsyncStorage.removeItem("tasks", () => {
      this.setState(() => ({
        tasks: []
      }));
    });
  };

  render() {
    return (
      <Container>
        <Title>Things to do</Title>
        <Wrapper>
          <TextField
            placeholder="Add your task"
            value={this.state.queryText}
            onChange={this.setQueryText}
          />
          <Button raised onClick={this.setTask}>
            ADD
          </Button>
          <Button raised color="accent" onClick={this.removeAllTasks}>
            REMOVE ALL
          </Button>
        </Wrapper>
        {this.state.tasks.map((task, i) => (
          <Item key={i}>
            <div>{task}</div>
            <IconButton
              color="accent"
              onClick={this.removeItem.bind(this, task)}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </Item>
        ))}
      </Container>
    );
  }
}

const Title = styled.h1`
  color: #424242;
  font-style: italic;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir Next;
  text-align: center;
  flex-direction: column;
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 80%;
    &>*{
      margin: 10px;
      width: 100%;
    }
  }
`;

const Item = styled(Paper) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 10px;
  padding: 5px;
`;

const TextField = styled(Input) `
  @media (max-width: 1000px) {
    width: 100%;
  }}
`;

export default AsyncStorageExample
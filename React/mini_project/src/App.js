import './App.css';
import React from 'react'
import Clicker from './Clicker/Clicker.js';
import {Card} from './Card Movie/Card.js';
import Chat from './Chat/Chat.js';
import TodoList from './Todo List/TodoList.js';

class App extends React.Component {
  state = {
    card: [{
      pic: "https://i.pinimg.com/564x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg",
      title: "card 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa consequuntur nihil nostrum ullam inventore saepe cumque alias doloribus amet!"
    },
    {
      pic: "https://i.pinimg.com/564x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg",
      title: "card 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa consequuntur nihil nostrum ullam inventore saepe cumque alias doloribus amet!"
    },
    {
      pic: "https://i.pinimg.com/564x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg",
      title: "card 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa consequuntur nihil nostrum ullam inventore saepe cumque alias doloribus amet!"
    },
    {
      pic: "https://i.pinimg.com/564x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg",
      title: "card 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa consequuntur nihil nostrum ullam inventore saepe cumque alias doloribus amet!"
    },
    {
      pic: "https://i.pinimg.com/564x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg",
      title: "card 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa consequuntur nihil nostrum ullam inventore saepe cumque alias doloribus amet!"
    }]
  }

  render() {
    const card = this.state.card;
    return (
      <div className="App">
        <TodoList />
        <Clicker />
        <div className="container_card">
          <div className="Number"></div>
          <div className="card">
            {card.map(obj => <Card pic={obj.pic} title={obj.title} content={obj.content}/>)}
          </div>
        </div>
        <Chat />
      </div>
    );
  }
}

export default App;

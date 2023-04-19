import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SubmitForm from '../SubmitForm/SubmitForm';
import TodoList from '../TodoList/TodoList';
import ComponentA from '../ComponentA/ComponentA';


class App extends React.Component {
  state = {
    list: []
  }

  constructor(props) {
    super(props);
    this.handleAddListItem = this.handleAddListItem.bind(this)
  }

  handleDelete(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    });
  }

  handleAddListItem(item) {
    const updatedList = [...this.state.list, item];

    this.setState({
      list: updatedList
    })
  }

  render() {
    return (
      <div className="App">
        <Header listCount={this.state.list.length} />
        <SubmitForm onAddItem={this.handleAddListItem} />
        <TodoList list={this.state.list} onDelete={this.handleDelete.bind(this)} />
        <ComponentA />      
      </div>
    );
  }
}

export default App;

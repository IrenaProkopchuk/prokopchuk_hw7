import React from 'react';
import { v4 } from 'uuid';
import { ToDoListIcon } from '../ToDiListIcon/ToDiListIcon';


class SubmitForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    // e.preventDefault();

    if (!this.state.value) {
      return;
    }

    const item = {
      ...this.state,
      id: v4()
    }

    this.props.onAddItem(item);
    this.setState({
      value: ''
    });
  }

  handleShowModal() {
    const newItemValue = prompt('Enter todo:');
    if (newItemValue) {
      this.setState({
        value: newItemValue
      }, this.handleSubmit);
    }
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <input
      //     type="text"
      //     value={this.state.value}
      //     onChange={this.handleChange.bind(this)}
      //     placeholder='Enter todo'
      //   />

      //   <button>
      //     <ToDoListIcon />
      //   </button>
      // </form>
      <div>
        <button onClick={this.handleShowModal.bind(this)}>
          <ToDoListIcon />
        </button>
      </div>
    )
  }
}

export default SubmitForm;
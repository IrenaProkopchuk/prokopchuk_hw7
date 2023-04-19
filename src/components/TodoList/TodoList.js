import React from 'react';


export default class TodoList extends React.Component {
  handleDelete(id) {
    this.props.onDelete(id);
  }

  handleCheck(id) {
    if (typeof this.props.onCheck === 'function') {
      this.props.onCheck(id);
    }
  }

  render() {
    const styles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return (
      <ul>
        {this.props.list.map(item => {
          const { id, value, done } = item;
          return (
            <li key={id} style={styles}>
              <input
                type="checkbox"
                checked={done}
                onChange={this.handleCheck.bind(this, id)}
              />
              <h4 style={{ marginRight: '15px' }} className={done ? 'done' : ''}>{value}</h4>
              <button onClick={this.handleDelete.bind(this, id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}



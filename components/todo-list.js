import React, {Component} from 'react'

class TodoList extends Component {
  toggle = id =>
    this.setState(state => {
      const list = state.list.map(todo => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      })
      return { ...state, list }
    })
  askRemove = todo => this.props.onRemove(todo)

  render() {
    return (
      <>
        <div className="container todolist">

          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Done</th>
                <th className="is-fullwidth">Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => {
                return (
                  <tr key={todo.id}>
                    <td className="has-text-centered">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          onChange={() => this.toggle(todo.id)}
                          defaultChecked={todo.done}
                        />
                      </label>
                    </td>
                    <td>{todo.name}</td>
                    <td>
                      <button
                        onClick={() => this.askRemove(todo)}
                        className="button is-danger"
                      >
                        <span className="icon is-small">
                          <i className="fas fa-times" />
                        </span>
                        <span>delete</span>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default TodoList

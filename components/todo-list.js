import React, { Component } from 'react'
import DeleteModal from './delete-modal'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      todos: {
        list: [
          { id: 1, done: true, name: 'Buy a milk for my boss' },
          { id: 2, done: false, name: 'Send a mail to a client' }
        ],
        counter: 3
      }
    }
    this.deleteModal = React.createRef()
  }

  handleChange = ({ target: { value } }) =>
    this.setState(state => ({ ...state, name: value }))
  toggle = id =>
    this.setState(state => {
      const list = state.todos.list.map(todo => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      })
      return { ...state, todos: { ...state.todos, list } }
    })
  askRemove = todo => this.deleteModal.current.askRemove(todo)
  remove = todo =>
    this.setState(state => ({
      ...state,
      todos: {
        ...state.todos,
        list: state.todos.list.filter(({ id }) => id !== todo.id)
      }
    }))
  add = name => {
    this.setState(state => {
      const { counter, list } = state.todos
      return {
        ...state,
        todos: {
          list: [...list, { id: counter, name, done: false }],
          counter: counter + 1
        },
        name: ''
      }
    })
  }
  onSubmitAdd = e => {
    e.preventDefault()
    this.add(this.state.name)
  }

  render() {
    const { name, todos } = this.state
    return (
      <>
        <DeleteModal ref={this.deleteModal} onRemove={this.remove} />
        <div className="container todolist">
          <form onSubmit={this.onSubmitAdd} className="field has-addons">
            <div className="control is-expanded has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-pen" />
              </span>
            </div>
            <div className="control">
              <button disabled={!name} className="button is-primary">
                <span className="icon is-small">
                  <i className="fas fa-check" />
                </span>
                <span>add</span>
              </button>
            </div>
          </form>

          <table className="table is-fullwidth is-striped is-hoverable">
            <thead>
              <tr>
                <th>Done</th>
                <th className="is-fullwidth">Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.list.map(todo => {
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

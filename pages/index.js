import React, { Component } from 'react'
import Head from '../components/head'
import TodoList from '../components/todo-list'
import DeleteModal from '../components/delete-modal'
import { TodoAdd } from '../components/todo-add'

class Home extends Component {
  state = {
    list: [
      { id: 1, done: true, name: 'Buy a milk for my boss' },
      { id: 2, done: false, name: 'Send a mail to a client' }
    ],
    counter: 3
  }

  deleteModal = React.createRef()

  add = name => {
    this.setState(state => ({
      ...state,
      list: [...state.list, { id: state.counter, name, done: false }],
      counter: state.counter + 1
    }))
  }

  remove = todo =>
    this.setState(state => ({
      ...state,
      list: state.list.filter(({ id }) => id !== todo.id)
    }))

  render = () => (
    <>
      <Head title="next-todo" />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <i className="fa fa-clipboard-list" />
              <span className="pl-1">next-todo</span>
            </h1>
            <h2 className="subtitle">A todo list manager made with Next.js</h2>
          </div>
        </div>
      </section>
      <section className="container">
        <TodoAdd onAdd={this.add} />
        <TodoList
          todos={this.state.list}
          onRemove={todo => this.deleteModal.current.askRemove(todo)}
        />
      </section>
      <DeleteModal ref={this.deleteModal} onRemove={this.remove} />
    </>
  )
}

export default Home

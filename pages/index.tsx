import { Component, createRef } from 'react'
import { Head } from '../components/head'
import { TodoList } from '../components/todo-list'
import { DeleteModal, DeleteModalRef } from '../components/delete-modal'
import { TodoAdd } from '../components/todo-add'
import { Todo } from '../types/todo'

export interface IndexProps {
  state?: IndexState
}

export interface IndexState {
  list: Todo[]
  counter: number
}

class IndexPage extends Component {
  props: IndexProps
  state: IndexState

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState(): IndexState {
    return {
      list: [
        { id: 1, done: true, name: 'Buy a milk for my boss' },
        { id: 2, done: false, name: 'Send a mail to a client' },
      ],
      counter: 3,
    }
  }

  get list() {
    return this.state.list
  }
  get counter() {
    return this.state.counter
  }
  setList = (list: Todo[]) => this.setState(state => ({ ...state, list }))
  setCounter = counter => this.setState(state => ({ ...state, counter }))
  add = name => {
    this.setList(
      this.state.list.concat({ id: this.counter, name, done: false })
    )
    this.setCounter(this.counter + 1)
  }
  remove = todo => this.setList(this.list.filter(({ id }) => id !== todo.id))
  toggle = id => {
    const newList = [...this.list]
    const target = newList.find(todo => todo.id === id)
    if (!!target) target.done = !target.done
    this.setList(newList)
  }

  deleteModalRef = createRef<DeleteModalRef>()
  showModal = (todo: Todo) => this.deleteModalRef.current.show(todo)

  render() {
    return (
      <>
        <Head title="next-todo" />
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <i className="fa fa-clipboard-list" />
                <span className="pl-1">next-todo</span>
              </h1>
              <h2 className="subtitle">
                A todo list manager made with Next.js
              </h2>
            </div>
          </div>
        </section>
        <section className="container">
          <TodoAdd onAdd={this.add} />
          <TodoList
            todos={this.list}
            onToggle={this.toggle}
            onClickRemove={this.showModal}
          />
        </section>
        <DeleteModal ref={this.deleteModalRef} onRemove={this.remove} />
      </>
    )
  }
}

export default IndexPage

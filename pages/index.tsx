import { Component, createRef } from 'react'
import { Head } from '../components/head'
import { TodoList } from '../components/todo-list'
import { DeleteModal, DeleteModalRef } from '../components/delete-modal'
import { TodoAdd } from '../components/todo-add'
import { Todo } from '../types/todo'

export const STORAGE_KEY = 'todos'
export const INITIAL_STATE: IndexState = {
  list: [
    { id: 1, done: true, name: 'Buy a milk for my boss' },
    { id: 2, done: false, name: 'Send a mail to a client' },
  ],
  counter: 3,
}

export interface IndexProps {
  state?: IndexState
}

export interface IndexState {
  list: Todo[]
  counter: number
}

class IndexPage extends Component<IndexProps, IndexState> {
  constructor(props) {
    super(props)
  }

  componentDidMount(): void {
    this.setState(() => this.initialState)
  }

  private get initialState(): IndexState {
    return this.localStorage || INITIAL_STATE
  }

  private get localStorage(): IndexState | null {
    const jsonString = localStorage.getItem(STORAGE_KEY)
    return jsonString ? JSON.parse(jsonString) : null
  }

  private set localStorage(state: IndexState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }

  add = name => {
    this.setState(
      (state: IndexState) => ({
        ...state,
        list: state.list.concat({ id: state.counter, name, done: false }),
        counter: state.counter + 1,
      }),
      () => (this.localStorage = this.state)
    )
  }
  remove = todo => {
    this.setState(
      state => ({
        ...state,
        list: state.list.filter(({ id }) => id !== todo.id),
      }),
      () => (this.localStorage = this.state)
    )
  }
  toggle = id => {
    const newList = [...this.state.list]
    const target = newList.find(todo => todo.id === id)
    if (!!target) target.done = !target.done
    this.setState(
      state => ({ ...state, list: newList }),
      () => (this.localStorage = this.state)
    )
  }

  deleteModalRef = createRef<DeleteModalRef>()
  showModal = (todo: Todo) => this.deleteModalRef.current.show(todo)

  render() {
    return (
      <>
        {this.state && (
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
                todos={this.state.list}
                onToggle={this.toggle}
                onClickRemove={this.showModal}
              />
            </section>
            <DeleteModal ref={this.deleteModalRef} onRemove={this.remove} />
          </>
        )}
      </>
    )
  }
}

export default IndexPage

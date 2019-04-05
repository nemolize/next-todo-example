import React from 'react'
import { Head } from '../components/head'
import { TodoList } from '../components/todo-list'
import { DeleteModal } from '../components/delete-modal'
import { TodoAdd } from '../components/todo-add'

export default () => {
  const [list, setList] = React.useState([
    { id: 1, done: true, name: 'Buy a milk for my boss' },
    { id: 2, done: false, name: 'Send a mail to a client' }
  ])

  const [counter, setCounter] = React.useState(3)

  const add = name => {
    setList(list.concat({ id: counter, name, done: false }))
    setCounter(counter + 1)
  }

  const remove = todo => setList(list.filter(({ id }) => id !== todo.id))

  const toggle = id => {
    const newList = [...list]
    const target = newList.find(todo => todo.id === id)
    if (target) target.done = !target.done
    setList(newList)
  }

  let deleteModalRef = React.useRef()

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
            <h2 className="subtitle">A todo list manager made with Next.js</h2>
          </div>
        </div>
      </section>
      <section className="container">
        <TodoAdd onAdd={add} />
        <TodoList
          todos={list}
          onToggle={toggle}
          onClickRemove={todo => {
            return deleteModalRef.current.show(todo)
          }}
        />
      </section>
      <DeleteModal ref={deleteModalRef} onRemove={remove} />
    </>
  )
}

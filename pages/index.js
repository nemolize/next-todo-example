import React from 'react'
import Head from '../components/head'
import TodoList from '../components/todo-list'

const Home = () => (
  <>
    <Head title="next-todo" />

    <section className="container">
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <i className="fa fa-clipboard-list"/>
                <span className="pl-1">next-todo</span>
              </h1>
              <h2 className="subtitle">
                A todo list manager made with Next.js
              </h2>
            </div>
          </div>
        </section>
        <TodoList />
      </div>
    </section>
  </>
)

export default Home

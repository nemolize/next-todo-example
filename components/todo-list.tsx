import { Todo } from '../types/todo'

export type PropTypes = {
  todos: Todo[]
  onToggle: (id: number) => void
  onClickRemove: (todo: Todo) => void
}

export const TodoList = ({ todos, onToggle, onClickRemove }: PropTypes) => (
  <>
    <table className="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th>Done</th>
          <th className="is-fullwidth">Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => {
          return (
            <tr key={todo.id}>
              <td className="has-text-centered">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    onChange={() => onToggle(todo.id)}
                    defaultChecked={todo.done}
                  />
                </label>
              </td>
              <td>{todo.name}</td>
              <td>
                <button
                  onClick={() => onClickRemove(todo)}
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
  </>
)

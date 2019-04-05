import React from 'react'

export const DeleteModal = React.forwardRef((props, ref) => {
  const [removeTarget, setRemoveTarget] = React.useState(null)
  const show = todo => setRemoveTarget(todo)
  const clear = () => setRemoveTarget(null)
  const remove = () => {
    props.onRemove(removeTarget)
    clear()
  }
  ref.current = { show }

  return (
    <>
      {removeTarget && (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Deleting an item</p>
              <button onClick={clear} className="delete" aria-label="close" />
            </header>
            <section className="modal-card-body">
              <div className="content">
                <p>Are you sure to delete the following item?</p>
                <p className="tag">
                  name:&nbsp;<strong>{removeTarget.name}</strong>
                </p>
              </div>
            </section>
            <footer className="modal-card-foot is-justified-end">
              <button
                onClick={remove}
                className="button is-danger is-pulled-right"
              >
                Delete
              </button>
              <button onClick={clear} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  )
})

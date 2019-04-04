import React, { Component } from 'react'

class DeleteModal extends Component {
  state = {
    removeTarget: null
  }

  askRemove = removeTarget =>
    this.setState(state => ({ ...state, removeTarget }))

  cancelRemove = () =>
    this.setState(state => ({ ...state, removeTarget: null }))

  remove = () => {
    this.props.onRemove(this.state.removeTarget)
    this.setState(state => ({ ...state, removeTarget: null }))
  }

  render() {
    const { removeTarget } = this.state
    return (
      <>
        {removeTarget && (
          <div className="modal is-active">
            <div className="modal-background" />
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Deleting an item</p>
                <button
                  onClick={this.cancelRemove}
                  className="delete"
                  aria-label="close"
                />
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
                  onClick={this.remove}
                  className="button is-danger is-pulled-right"
                >
                  Delete
                </button>
                <button onClick={this.cancelRemove} className="button">
                  Cancel
                </button>
              </footer>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default DeleteModal

import IndexPage, { IndexState } from '../pages'
import { shallow, ShallowWrapper } from 'enzyme'
import { TodoList } from '../components/todo-list'

const initialState: IndexState = {
  list: [{ id: 1, done: false, name: 'initial todo' }],
  counter: 2,
}

describe('Home', () => {
  let wrapper: ShallowWrapper
  let instance: IndexPage
  beforeEach(() => {
    wrapper = shallow(<IndexPage />)
    instance = wrapper.instance() as IndexPage
    instance.setState(JSON.parse(JSON.stringify(initialState)))
  })

  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('should pass list to TodoList', () => {
    expect(wrapper.find(TodoList).props().todos).toEqual(initialState.list)
  })

  test('should add an item', () => {
    instance.add('add test')
    expect(wrapper.state()).toEqual({
      list: [
        { id: 1, done: false, name: 'initial todo' },
        { id: 2, done: false, name: 'add test' },
      ],
      counter: 3,
    })
  })

  describe('toggle', () => {
    test('should toggle an item status', () => {
      instance.toggle(1)
      expect(wrapper.state()).toEqual({
        list: [{ id: 1, done: true, name: 'initial todo' }],
        counter: 2,
      })
    })

    test('should skip if id not found', () => {
      instance.toggle(2)
      expect(wrapper.state()).toEqual(initialState)
    })
  })

  test('should remove an item', () => {
    instance.remove(initialState.list[0])
    expect(wrapper.state()).toEqual({
      list: [],
      counter: 2,
    })
  })

  test('should show delete modal', () => {
    const showSpy = jest.fn()
    Object.assign(instance.deleteModalRef, { current: { show: showSpy } })
    instance.showModal(initialState.list[0])
    expect(showSpy).toHaveBeenCalledWith(initialState.list[0])
  })
})

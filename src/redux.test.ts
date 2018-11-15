import { combineReducers, createStore } from './redux'

describe('Redux', () => {
  it('creates a new state after each dispatched action', () => {
    const rootReducer = combineReducers({
      todos: (state = [], action) => {
        switch (action.type) {
          case 'ADD_TODO': {
            return [...state, { activity: action.payload.activity }]
          }
        }

        return [...state]
      },
      user: (state = { firstName: '', lastName: '' }, action) => {
        switch (action.type) {
          case 'UPDATE_USER': {
            return {
              ...state,
              ...action.payload.data,
            }
          }
        }

        return { ...state }
      },
    })

    const store = createStore(rootReducer)

    store.subscribe((state, prevState) => {
      expect(state.user).not.toBe(prevState.user)
      expect(state.user).toEqual({ firstName: 'Maciej', lastName: 'Cieslar' })
      expect(prevState.user).toEqual({ firstName: '', lastName: '' })
    })

    const prevState = store.getState()

    store.dispatch({
      type: 'UPDATE_USER',
      payload: {
        data: {
          firstName: 'Maciej',
          lastName: 'Cieslar',
        },
      },
    })

    const state = store.getState()

    expect(store.getState()).not.toBe(store.getState())
    expect(prevState).not.toBe(state)
  })
})

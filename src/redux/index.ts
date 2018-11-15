function copy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

const combineReducers = (reducersMap: object) => {
  return (state = {}, action) => {
    return Object.keys(reducersMap).reduce((result, key) => {
      const reducer = reducersMap[key]
      const stateSlice = state[key]

      return {
        ...result,
        [key]: reducer(stateSlice, action),
      }
    }, {})
  }
}

const createStore = (reducer, initialState: any = {}) => {
  let state = {
    ...copy(initialState),
    ...reducer(undefined, {}),
  }
  let subscribers = []

  return {
    getState() {
      return copy(state)
    },
    subscribe(subscriber) {
      subscribers = [...subscribers, subscriber]
    },
    dispatch(action) {
      const prevState = state
      state = reducer(state, action)

      subscribers.forEach((sub) => sub(copy(state), copy(prevState)))

      return action
    },
  }
}

export { createStore, combineReducers }

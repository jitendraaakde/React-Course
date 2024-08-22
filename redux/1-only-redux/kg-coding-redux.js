const redux = require('redux')

const INITIAL_VALUE = { counter: 0 }

const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === "INC") {
        newStore = { counter: store.counter + 1 }
    } else if (action.type === "DEC") {
        newStore = { counter: store.counter - 1 }
    }
    return newStore
}
const store = redux.createStore(reducer)
//this is store which contains state of whole project

const subscriber = () => {
    const state = store.getState()
    // subscriber takes state from store and update itself
    console.log(state)
}

store.subscribe(subscriber)

store.dispatch({ type: "INC" })
store.dispatch({ type: "INC" })
store.dispatch({ type: "INC" })
store.dispatch({ type: "INC" })
store.dispatch({ type: "DEC" })


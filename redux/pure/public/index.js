const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector('#third');

const redbtn = document.querySelector("#red");
const yellowbtn = document.querySelector("#yellow");
const greenbtn = document.querySelector("#green");

/*
function red() {
  first.style.backgroundColor = "red";
  second.style.backgroundColor = "red";
}
redbtn.addEventListener("click", red);
function yellow() {
  first.style.backgroundColor = "yellow";
  second.style.backgroundColor = "yellow";
  third.style.backgroundColor = 'yellow';
}
yellowbtn.addEventListener("click", yellow);

function green() {
  first.style.backgroundColor = 'green';
  second.style.backgroundColor = 'green';
  third.style.backgroundColor = 'green';
}
greenbtn.addEventListener("click", green);
*/

/* Redux.ver */
function reducer(state = { theme: 'thransparent' }, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme
      }

    default:
      return state
  }
}

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function red() {
  store.dispatch({ type: 'CHANGE_THEME', theme: 'red' })
}

function renderFirst() {
  const state = store.getState();
  first.style.backgroundColor = state.theme;
}

redbtn.addEventListener('click', red);
store.subscribe(renderFirst);

function yellow() {
  store.dispatch({ type: 'CHANGE_THEME', theme: 'yellow' })
}

function renderSecond() {
  const state = store.getState();
  second.style.backgroundColor = state.theme;
}

yellowbtn.addEventListener('click', yellow);
store.subscribe(renderSecond);

function green() {
  store.dispatch({ type: 'CHANGE_THEME', theme: 'green' })
}

function renderthird() {
  const state = store.getState();
  third.style.backgroundColor = state.theme;
}

greenbtn.addEventListener('click', green);
store.subscribe(renderthird);
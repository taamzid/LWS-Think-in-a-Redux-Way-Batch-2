const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const resultEl = document.getElementById("result");
const resetEl = document.getElementById("reset");
const addEl = document.getElementById("addMatch");

const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = () => {
  return {
    type: INCREMENT,
    payload: parseFloat(incrementEl.value),
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
    payload: parseFloat(decrementEl.value),
  };
};

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: parseFloat(state.value + action.payload),
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  if (state.value > 0) {
    resultEl.innerText = state.value.toString();
  } else {
    resultEl.innerText = 0;
    state.value = "";
  }
};

render();

store.subscribe(render);

incrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    store.dispatch(increment());
  }
});

decrementEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    store.dispatch(decrement());
  }
});

resetEl.addEventListener("click", () => {
  incrementEl.value = "";
  decrementEl.value = "";
  const state = store.getState();
  resultEl.innerText = 0;
  state.value = "";
});

addEl.addEventListener("click", (event) => {
  const allMatchesContainer = document.querySelector(".all-matches.container");
  const match = document.querySelector(".match");

  const div = document.createElement("div");
  div.className = "match";
  div.innerHTML = match.innerHTML;
  allMatchesContainer.appendChild(div);
});

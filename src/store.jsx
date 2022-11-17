import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

// 待办数据
const todoData = (state = [], action) => {
  switch (action.type) {
    case 'addTodo': {
      const newState = [...state];
      newState.push(action.value);
      return newState;
    }
    case 'deleteTodoByIndex': {
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    }
    case 'deleteTodoByID': {
      return state.filter(x => x.id !== action.value);
    }
    case 'updateTodo': {
      const newState = [...state];
      newState[action.value.idx] = action.value.data;
      return newState;
    }
    default: {
      return state;
    }
  }
}

// 待办目前ID
const todoIndex = (state = 1, action) => {
  switch (action.type) {
    case 'addTodo':
      return state + 1;
    default:
      return state;
  }
}

// 便签数据
const noteData = (state = [], action) => {
  switch (action.type) {
    case 'addNote': {
      const newState = [...state];
      newState.push(action.value);
      return newState;
    }
    case 'deleteNoteByIndex': {
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    }
    case 'deleteNoteByID': {
      return state.filter(x => x.id !== action.value);
    }
    default: {
      return state;
    }
  }
}

// 便签目前ID
const noteIndex = (state = 1, action) => {
  switch (action.type) {
    case 'addNote':
      return state + 1;
    default:
      return state;
  }
}

// 待办数据+ID
const todo = combineReducers({
  data: todoData,
  index: todoIndex,
});

// 便签数据+ID
const note = combineReducers({
  data: noteData,
  index: noteIndex,
});

// 根reducer
const rootReducer = combineReducers({
  todo: todo,
  note: note,
});

const persistConfig = {
  key: 'TodoListAppData',
  storage: storage,
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistRootReducer,
});

const persistor = persistStore(store);

export {
  store,
  persistor
};
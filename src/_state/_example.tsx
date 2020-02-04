import React from 'react';
import axios from 'axios';
import { useStateValue, Action, StateContext } from './';

export type _ExampleState = {
  theme: {
    primary: string,
  },
};

export const _exampleInitialState : _ExampleState = {
  theme: { primary: 'green' }
};

export const CHANGE_THEME = '@_EXAMPLE/CHANGE_THEME';

export const _exampleSideEffects = async (action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      try {
        const result = await axios.get('https://reqres.in/api/users?delay=2');
        console.log(result)
        return {
          ...action,
          payload: {
            ...action.payload,
            data: result.data,
          }
        }
      } catch (error) {
        console.log(error)
      }
      return action;
    default:
      return action;
  }
}

export const _exampleReducer = (state: _ExampleState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_THEME: {
      const { payload } = action;
      return {
        ...state,
        theme: payload.theme,
      };
    }
      
    default:
      return state;
  }
};
  
export const ThemedButtonF = () => {
  const { state, dispatch } = useStateValue();
  const { _example } = state;
  return (
    <button
      style={{background: _example.theme.primary}}
      onClick={() => dispatch({
        type: CHANGE_THEME,
        payload: {
          theme: { primary: 'blue'},
        },
      })}
    >
      Make us blue!
    </button>
  );
};

export class ThemedButtonC extends React.Component {
  static contextType = StateContext;
  render() {
    const { state, dispatch } = this.context;
    const { _example } = state;
    return (
      <button
        style={{background: _example.theme.primary}}
        onClick={() => dispatch({
          type: CHANGE_THEME,
          payload: {
            theme: { primary: 'red'},
          },
        })}
      >
        Make us red!
      </button>
    );
  }
}

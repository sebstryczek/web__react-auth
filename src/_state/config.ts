import { _exampleReducer, _ExampleState, _exampleInitialState } from './_example';
import { Action } from '.';

export type State = {
  _example: _ExampleState,
}

export const initialState: State = {
  _example: _exampleInitialState,
};

export const rootReducer = (state: State = initialState, action: Action) => {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    _example: _exampleReducer(state._example, action),
  };
};

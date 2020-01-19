import { Action } from '.';
import { _exampleReducer, _exampleSideEffects, _ExampleState, _exampleInitialState } from './_example';
import { AuthState, authState } from '../auth';


export type State = {
  _example: _ExampleState,
  auth: AuthState,
}

export const initialState: State = {
  _example: _exampleInitialState,
  auth: authState,
};

export const rootSideEffects = (dispatch: any) => {
  return async (action: Action) => {
    const sideEffectsReducers = [
      _exampleSideEffects
    ];

    const enhancedActions = await sideEffectsReducers.reduce(
      async(action: any, applySideEffects) => {
        const appliedSideEffectsAction = await applySideEffects(action);
        return appliedSideEffectsAction
    }, action);

    return dispatch(enhancedActions);
  };
};

export const rootReducer = (state: State = initialState, action: Action) => {
  // middleware goes here, i.e calling analytics service, etc.
  // const a = dispatchMiddleware(action)
  return {
    _example: _exampleReducer(state._example, action),
    auth: state.auth,
  };
};

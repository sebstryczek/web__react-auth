import { History as _History } from 'history';
import { useHistory as _useHistory } from 'react-router-dom';

type LocationState = {
  source: {
    pathname: string,
  },
};

export type History = _History<LocationState>

const useHistory = (): History => {
  const history = _useHistory();
  const state = history.location.state || {};
  const source = state.source || {};
  const pathname: string = source.pathname || '/';

  return {
    ...history,
    location: {
      ...history.location,
      state: {
        source: {
          pathname: pathname || '/',
        },
      }
    }
  };
};

export default useHistory;

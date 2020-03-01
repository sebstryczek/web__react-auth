import { History } from '../_auth/hooks/useHistory';
import AuthModel from '../_auth/types/AuthModel';

export type Page = {
  useHistory?: () => History,
  useAuth?: () => AuthModel,
}

import { PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../store/const';
import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/utils';

type PrivateType = PropsWithChildren<{
  auth: string;
  children: JSX.Element;
}>;

function PrivateRoute({auth, children} : PrivateType) : JSX.Element {

  return (
    auth === AuthorizationStatus.Auth
      ? children
      : (<Navigate to={AppRoutes.SIGN_IN} />)
  );
}
export default PrivateRoute;

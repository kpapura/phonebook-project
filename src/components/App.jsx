import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ContactsPage, HomePage, LoginForm, NotFound, RegisterForm } from 'pages';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
import { selectIsLoading } from '../redux/auth/authSlice';

function App() {
  const isLoading = useSelector(selectIsLoading)
  return (
    isLoading ? (<Loader />) :
   ( <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
          } />
        <Route path="register" element={
          <PublicRoute>
            <RegisterForm />
          </PublicRoute>
          } />
        <Route path="login" element={
          <PublicRoute>
             <LoginForm />
          </PublicRoute>
         } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>)
  );
}

export default App;

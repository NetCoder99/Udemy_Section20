import { Route } from 'react-router-dom';

const Welcome = (props: any) => {
  return (
    <section>
      <h1>Welcome the router app</h1>
      <Route path="/welcome/new-user">
          Hello new user!
      </Route>
    </section>
  );
};

export default Welcome;

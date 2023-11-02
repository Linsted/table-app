import { lazy } from "react";

const UsersPage = lazy(() => import("./pages/UsersPage/UsersPage"));

function App() {
  return (
    <div>
      <UsersPage></UsersPage>
    </div>
  );
}

export default App;

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "dashboard";
  }, []);
  return <div>mmd</div>;
};

export default App;

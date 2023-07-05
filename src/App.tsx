import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/header/Header";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <>
      <Header />
      <Dashboard/>
      <GlobalStyles />
    </>
  );
}



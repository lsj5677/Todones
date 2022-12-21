import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Background from "./components/Background/Background";
import { useContext, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Background />
      <div className="wrap">
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
        {/* <Footer /> */}
      </div>
    </DarkModeProvider>
  );
}

export default App;

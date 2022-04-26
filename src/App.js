import QuoteItem from "./components/QuoteItem";
import TodoCount from "./components/TodoCount";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="overflow-y-scroll scrollbar-hide bg-gradient-to-t from-gray-700 via-blue-500 to-slate-900 h-screen pb-20">
      <div className="max-w-3xl mx-auto relative">
        <QuoteItem />
        <TodoForm />
        <TodoList />
        <TodoCount />
      </div>
    </div>
  );
}

export default App;

import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

import TodoFilter from "./TodoFilter";
const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between my-2">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-1">
        {todos.length === 0 ? (
          <div className="bg-white p-3 flex justify-center items-center font-semibold text-2xl rounded-xl">
            <p>There is no task pending</p>
          </div>
        ) : (
          <div className=" bg-white p-3 space-y-3 rounded-xl">
            {todos.map((item) => (
              <TodoCard title={item.title} description={item.description} id={item.id}
               isCompleted={item.isCompleted} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;

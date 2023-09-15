import { SortableContext } from "@dnd-kit/sortable";
import PlusIcon from "../Icons/PlusIcon";
import TrashIcon from "../Icons/TrashIcon";
import TaskCard from "../TaskCard/TaskCard";
import useContainer from "./useContainer";

type Props = {
  tasks: Task[];
  column: Column;
  createTask: (id: Id) => void;
  deleteColumnHandler: (id: Id) => void;
  updateColumn: (id: Id, value: string) => void;
  updateTask: (id: Id, value: string) => void;
  deleteTask: (id: Id) => void;
};
const ColumnContainer = ({
  tasks,
  createTask,
  column,
  deleteColumnHandler,
  updateColumn,
  deleteTask,
  updateTask,
}: Props) => {
  const {
    tasksFromColumn,
    tasksIds,
    style,
    attributes,
    listeners,
    isDragging,
    isEditMode,
    setNodeRef,
    setIsEditMode,
  } = useContainer({ column, tasks });

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        bg-columnBackgroundColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        opacity-60
        border-2
        border-rose-500
        flex
        flex-col
    "
      ></div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        bg-columnBackgroundColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
    "
    >
      {/* column title */}
      <div
        onClick={() => setIsEditMode(true)}
        {...attributes}
        {...listeners}
        className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        borer-4
        flex
        items-center
        justify-between
        "
      >
        <div className="flex gap-2">
          <div className="flex items-center justify-center px-2 py-1 text-sm bg-columnBackgroundColor">
            0
          </div>
          {!isEditMode ? (
            column.title
          ) : (
            <input
              className="px-2 bg-black border rounded outline-none focus:border-rose-500"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              placeholder="Enter title"
              autoFocus
              onBlur={() => setIsEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") {
                  return;
                }
                setIsEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => deleteColumnHandler && deleteColumnHandler(column.id)}
          className="px-1 py-2 rounded stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor"
        >
          <TrashIcon />
        </button>
      </div>
      {/* Column task container */}
      <div className="flex flex-col flex-grow gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasksFromColumn.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* column footer */}
      <button
        className="flex items-center gap-2 p-4 border-2 rounded-md border-columnBackgroundColor border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon />
        Add task
      </button>
    </div>
  );
};

export default ColumnContainer;

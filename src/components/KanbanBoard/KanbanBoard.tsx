import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import PlusIcon from "../Icons/PlusIcon";
import useContainer from "./useContainer";

const KanbanBoard = () => {
  const {
    tasks,
    sensors,
    activeColumn,
    columns,
    columnsId,
    createTask,
    updateColumn,
    onDragStart,
    handleCreateNewColumn,
    deleteColumnHandler,
    onDragEnd,
    deleteTask,
    updateTask,
    onDragOver,
  } = useContainer();
  return (
    <div className="justify-center flex items-center w-full min-h-screen m-auto overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext
        sensors={sensors}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
      >
        <div className="flex flex-wrap gap-4 m-auto">
          <div className="flex flex-wrap gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => (
                <ColumnContainer
                  tasks={tasks}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  createTask={createTask}
                  updateColumn={updateColumn}
                  deleteColumnHandler={deleteColumnHandler}
                  key={column.id}
                  column={column}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => handleCreateNewColumn()}
            className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            rounded-lg
            cursor-pointer
            bg-mainBackgroundColor
            border-2
            border-columnBackgroundColor
            p-4
            ring-rose-500
            hover:right-2
            text-white
            flex
            gap-2
        "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks}
                createTask={createTask}
                updateColumn={updateColumn}
                deleteColumnHandler={deleteColumnHandler}
                column={activeColumn}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

export default KanbanBoard;

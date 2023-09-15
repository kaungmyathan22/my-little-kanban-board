import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";

type Props = {
  column: Column;
  tasks: Task[];
};

const useContainer = ({ column, tasks }: Props) => {
  //#region Section Name
  const [isEditMode, setIsEditMode] = useState(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const tasksFromColumn = useMemo(
    () => tasks.filter((task) => task.columnId === column.id),
    [tasks, column]
  );
  const tasksIds = useMemo(
    () => tasksFromColumn.map((task) => task.id),
    [tasksFromColumn]
  );

  //#endregion

  return {
    // variables
    tasksIds,
    style,
    attributes,
    listeners,
    isDragging,
    isEditMode,
    tasksFromColumn,
    // functions
    setNodeRef,
    setIsEditMode,
  };
};

export default useContainer;

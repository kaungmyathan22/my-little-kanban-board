import { v4 as uuidv4 } from "uuid";

const todoId = uuidv4();
const doingId = uuidv4();
const doneId = uuidv4();
export const defaultCols: Column[] = [
  {
    id: todoId,
    title: "Todo",
  },
  {
    id: doingId,
    title: "Work in progress",
  },
  {
    id: doneId,
    title: "Done",
  },
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: todoId,
    content: "List admin APIs for dashboard",
  },
  {
    id: "2",
    columnId: todoId,
    content:
      "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
  },
  {
    id: "3",
    columnId: doingId,
    content: "Conduct security testing",
  },
  {
    id: "4",
    columnId: doingId,
    content: "Analyze competitors",
  },
  {
    id: "5",
    columnId: doneId,
    content: "Create UI kit documentation",
  },
  {
    id: "6",
    columnId: doneId,
    content: "Dev meeting",
  },
  {
    id: "7",
    columnId: doneId,
    content: "Deliver dashboard prototype",
  },
  {
    id: "8",
    columnId: todoId,
    content: "Optimize application performance",
  },
  {
    id: "9",
    columnId: todoId,
    content: "Implement data validation",
  },
  {
    id: "10",
    columnId: todoId,
    content: "Design database schema",
  },
  {
    id: "11",
    columnId: todoId,
    content: "Integrate SSL web certificates into workflow",
  },
  {
    id: "12",
    columnId: doingId,
    content: "Implement error logging and monitoring",
  },
  {
    id: "13",
    columnId: doingId,
    content: "Design and implement responsive UI",
  },
];

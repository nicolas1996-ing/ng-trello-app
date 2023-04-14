export interface Task {
  id: number;
  title: string;
}

export interface Column {
  title: string;
  isOpenCard: boolean, 
  todos: Task[];
}

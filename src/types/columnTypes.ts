import { ITask } from './taskTypes';

export interface IColumn {
  id: string;
  title: string;
  projectRef: string;
  order: number;
  tasks: ITask[];
}

import { IColumn } from './columnTypes';
import { ITask } from './taskTypes';

export interface IProject {
  id: string;
  title: string;
  ownerRef: string;
  membersRef: string[];
  columns?: IColumn[];
  tasks?: ITask[];
  description?: string;
}

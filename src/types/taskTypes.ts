export interface ITask {
  id: string;
  title: string;
  projectRef: string;
  columnRef: string;
  assigneeRef?: string;
  subscriberRefs: string[];
  order: number;
  priority?: number;
  description?: string;
}

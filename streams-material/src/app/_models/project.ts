export interface IProject {
    id: number;
    name: string;
    projectkey: string;
    owner: string;
    active: boolean;
    priority: number;
    projectTypeId: number;
    started: Date;
    completed: Date;
    deadline: Date;
  }


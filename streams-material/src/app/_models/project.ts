// export interface IProject {
//     id: number;
//     name: string;
//     projectkey: string;
//     owner: string;
//     active: boolean;
//     priority: number;
//     projectTypeId: number;
//     started: Date;
//     completed: Date;
//     deadline: Date;
//   }

export interface IProject {
    id: number;
    name: string;
    projectKey: string;
    projectTypeId: number;
    productId?: number;
    workstreamId?: number;
    OrganisationId?: number;
    active: boolean;
    completed: boolean;
    description: string;
    owner: string;
    priority: number;
    deadlineDate?: Date;
    startDate?: Date;
    completedDate?: Date;
    createdDate: Date;
  }

  /* THIS IS THE PROJECT FIELD LIST FROM THE API 
  id
  name
  projectKey
  projectTypeId
  workstreamId
  OrganisationId
  active
  completed
  description
  owner
  priority
  deadlineDate
  startDate
  completedDate
  createdDate
  timeStamp
  */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public workstreams = [
    {id: 1, name: 'IVIG', owner: 'Paul'},
    {id: 1, name: 'NHD', owner: 'Enis'},
    {id: 1, name: 'Projects', owner: 'Andy'},
    {id: 1, name: 'MDSAS', owner: 'Rob'}
  ];



  constructor() { }


  getWorkstreams()
  {
    return this.workstreams;
  }

}

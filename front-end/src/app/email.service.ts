//needed only if the service has dependency in its constructor, es: constructor(log: LogServices) {}
//Components include this decorator internally
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}

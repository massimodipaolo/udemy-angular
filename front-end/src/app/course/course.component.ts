import { Component, OnInit } from '@angular/core';
import { Course } from '../courses.service'
import { CoursesService } from '../courses.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'] 
})

export class CourseComponent implements OnInit {

  title: string;
  abstract: string;
  items: Course[];

  //DI: register in app.module providers
  constructor(service: CoursesService) {
    this.title = "List of courses 2018";
    this.abstract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere metus nec arcu sagittis tincidunt iaculis rhoncus tellus. Nullam consectetur sem faucibus, lacinia ex at, tincidunt elit. Fusce non porttitor lorem. Aenean vestibulum eros sed facilisis aliquam. Nam at quam suscipit, maximus elit sed, imperdiet leo. Vivamus varius nisl nulla, at accumsan lorem porttitor at. Phasellus sit amet efficitur enim. Vestibulum auctor ac justo et congue. Phasellus ornare vehicula vulputate. Quisque venenatis tristique massa ut ornare. Vestibulum fringilla et orci vitae sodales.";
    this.items = service.get();    
  }
  

  ngOnInit() {
    //this.title = "List of courses";

    /*
    this.items = new Array();   // = [] 
    this.items.push(new Course("Angular", "Luca Zampetti", 60));
    this.items.push(new Course("c#", "Stefano Montini", 10));
    this.items.push(new Course("Sql Server", "Massimo Di Paolo", 30));
    */

    /*
    this.items = new CoursesService().get();
    */
  }

}



import { Component } from '@angular/core'; //Component decorator; @Component

@Component({
  selector: 'courses', // <courses> => "courses" (preferred) ; <div class="courses"> => ".courses"; <div id="courses"> => "#courses"
  template: `
    <h2>{{title}}</h2>
    <!-- Property binding to DOM (not HTML) property) -->
    <img [src]="image" alt="{{title}}" />
    <button class="btn btn-primary" [class.active]="active">Bootstrap {{active ? "active" : ""}} button</button>
    <button class="btn btn-warning" [class.disable]="!active">Bootstrap {{active ? "" : "disable"}} button</button>    
    <hr/>

    <h3>Event bubbling (propagation from inner to outer)</h3>    
    <div (click)="onOuterDivClick($event)">
      <div (click)="onInnerDivClick($event)">
        <button [style.color]="active ? 'red' : 'green'" (click)="onSave($event)">Save</button>
      </div>
    </div>
    <hr/>

    <h3>Event filter</h3>
    <input (keyup)="onKeyUp($event)" />
    <input (keyup.enter)="onEnterKey()" /> <!-- $event.key in lowercase -->
    <hr />

    <h3>Template variables</h3>
    <input (keyup.enter)="onEnterGetValue($event)" />
    <input #name (keyup.enter)="onEnterGetName(name.value)" />
    <hr />

    <h3>One-way binding (from component to view)</h3>
    <input [value]="user.name" (keyup.enter)="onEnterGetUser()" />    
    <input [value]="user.email" (keyup.enter)="onEnterGetUser()" />    
    <hr />

    <h3>Two-way binding [(ngModel)]</h3>
    <h4>import FormsModule in app.module</h4>
    <!-- <input [value]="user.name" (keyup.enter)="user.name = $event.target.value; onEnterGetUser()" /> -->    
    <input [(ngModel)]="user.name" (keyup.enter)="onEnterGetUser()" />
    <input [(ngModel)]="user.email" (keyup.enter)="onEnterGetUser()" />    
    <hr />

    <input [(ngModel)]="description"/>
    <span>{{description | titlecase}}</span>

`
})

export class CoursesComponent { //Pascal + Component
  title = "Courses";
  image = "https://picsum.photos/300/300?random";
  active = true;
  user = {
    name: "Massimo Di Paolo",
    email: "massimo.dipaolo@gmail.com"
  };
  description:string;

  onSave($event) {
    this.active = !this.active;
    console.log('1. Button was clicked',$event);
  }

  onInnerDivClick($event) {
    $event.stopPropagation();
    console.log('2. Div was clicked', $event);
  }

  onOuterDivClick($event) {
    console.log('3. Div was clicked', $event);
  }

  onKeyUp($event) {
    console.log($event);
    if ($event.key == 'Enter')
      console.log('Enter was pressed', $event);
  }

  onEnterKey() {
    console.log('Enter was pressed');
  }

  onEnterGetValue($event) {
    console.log(`Enter was pressed: ${$event.target.value}`);
  }

  onEnterGetName(value) {
    console.log(`Enter was pressed: ${value}`);
  }

  onEnterGetUser() {
    console.log('Enter was pressed',this.user);
  }

}

export class CoursesService {
  get() {
    return [
      new Course("Angular", "Luca Zampetti", 4.97660, 120, 10.99, new Date(2018,5,10)),
      new Course("c#", "Stefano Montini", 3.89,40, 9.99),
      new Course("Sql Server", "Massimo Di Paolo", 3.45, 87, 14.99)
    ];
  }
}

export class Course {
  constructor(public title?: string, public author?: string, public rating?: number, public students?: number, public price?: number, public releaseDate?: Date) { }
}

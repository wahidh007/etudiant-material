export class Post {
  id: number;
  title: string;
  description: string;
  datePost: Date;
  loveIT!: number;

  constructor( id: number, title: string, description: string, datePost: Date, loveIT?: number) {
    this.id =  id;
    this.title = title;
    this.description = description;
    this.datePost = datePost;
    this.loveIT = loveIT!;
  }
}

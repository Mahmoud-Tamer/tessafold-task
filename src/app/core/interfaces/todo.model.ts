export abstract class Todo {
  constructor(
    public userId: string,
    public id: string,
    public title: string,
    public completed: boolean
  ) {}
}

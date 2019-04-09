import { UserComment } from "./user-comment.model";

export class UserForum {
  constructor(public title: string, public subject: string, public body: string, public dateCreated: string, public userName: String, public comments: UserComment[]) {}
}

import { PipeTransform, Pipe } from "@angular/core";
import { UserForum } from "./models/user-forum.model";

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(post: UserForum[], searchTerm: string): any {
        if (!post || !searchTerm) {
            return post;
        }
        return post.filter(post =>
            post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

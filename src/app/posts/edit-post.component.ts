import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { PostForm } from '../shared/model/post-form.model';
import { PostService } from '../shared/service/post.service';

@Component({
  moduleId: module.id,
  selector: 'app-edit-post',
  templateUrl: 'edit-post.component.html',
  styleUrls: ['edit-post.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {

  post: PostForm;
  id: any;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.post = new PostForm();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        id = id;
        this.postService
          .getPost(id)
          .subscribe(p => {
            let  data =p.json();
            this.post.title = data.title;
            this.post.content = data.content;
          });
      });

  }

  public save(form: PostForm, isValid: boolean) {
    console.log(form, isValid);
    if (isValid) {
      this.postService.update(this.id, form)
        .subscribe(
        (res) => {
          this.router.navigateByUrl('/');
        }
        );
    }
  }

}

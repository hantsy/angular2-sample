import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { PostForm } from './shared/model/post-form.model';
import { PostService } from './shared/service/post.service';

@Component({
  //moduleId: module.id,
  selector: 'app-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  post: PostForm;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = new PostForm();
  }

  public save(form: PostForm, isValid: boolean) {
    console.log(form, isValid);
    if (isValid) {
      this.postService.save(form)
        .subscribe(
          (res) => {
            this.router.navigateByUrl('/');
          }
        );
    }
  }

}

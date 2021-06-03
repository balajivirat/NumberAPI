import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  values: any;
  content: any;
  storage: any[] = [];
  text: any;
  constructor(public user: UserService) { }

  ngOnInit(): void {

  }
  getvalue(value: any) {
    this.values = value.numbers
    this.user.getdata(this.values);

    this.user.linkvalue().subscribe(res => {

      this.content = res;
      this.text = this.content.text
      this.storage.push(this.content)
      console.log(this.content);
      if (this.storage.length == 10) {
        this.storage.shift();
      }

    })
  }
}

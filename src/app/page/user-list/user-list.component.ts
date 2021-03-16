import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  filterText: string = '';

  // Sorter
  columnKey: string = '';


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onColumnSelect(key: string) {
    this.columnKey = key;
    console.log(key);
  }

  delete(id: number): void {
    this.userService.delete(id).subscribe();
    document.location.reload();
  }

  onConfirmDelete(id: number): void {
    confirm(`Do you really want to delete this user? #${id}`) && this.delete(id);
  }
}

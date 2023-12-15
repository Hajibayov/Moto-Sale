import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CabinetService } from '../cabinet.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonFilter } from '../common-filter.model';
import { ResponseListTotal } from 'src/app/models/response-list-total.model';
import { NewBlogComponent } from '../new-blog/new-blog.component';
import { BlogDTO } from './blogDto.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'description',
    'created_at',
    'created_by',
    'operation',
  ];
  dataSource: BlogDTO[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  total: number;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  showSpinner = false;
  constructor(
    private cabinetService: CabinetService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBlogs()
  }
  getBlogs() {
    this.showSpinner = true;
    let filterModel = new CommonFilter(this.currentPage + 1, this.pageSize);
    this.cabinetService.getBlogs(filterModel).subscribe({
      next: (res: ResponseListTotal<BlogDTO>) => {
        this.total = res.response.total;
        console.log(this.paginator);
        if (this.paginator) {
          this.paginator.length = this.total;
          console.log(this.paginator.length);
          if (
            this.paginator.pageIndex > 0 &&
            this.paginator.pageIndex * this.paginator.pageSize == this.total
          ) {
            this.paginator.previousPage();
            console.log(this.paginator.pageIndex);
          }
        }
        this.dataSource = res.response.data;
        console.log(res.response.data);
        this.showSpinner = false;
      },
      error: (error) => {},
    });
  }
  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getBlogs();
  }
  onEdit(element: any) {
    let dialogRef = this.dialog.open(NewBlogComponent, {
      width: '500px',
      data: {
        form: element,
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getBlogs();
      }
    });
  }

  onCreate() {
    this.dialog.open(NewBlogComponent, {
      width: '500px',
    });
  }

  onDelete(id: number) {
    this.showSpinner = true;
    this.cabinetService.deleteBlog(id).subscribe((res) => {
      alert(res.status.message);
      this.getBlogs();
      this.showSpinner = false;
    });
  }
}

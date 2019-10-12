import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../../services/data-handler.service';
import {Category} from '../../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    console.log(this.categories);
  }

  public loadTask(category: Category) {
    this.dataHandler.fillTaskByCategory(category)
  }
}

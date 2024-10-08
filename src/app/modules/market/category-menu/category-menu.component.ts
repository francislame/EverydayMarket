import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../model';
 
@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  @Input() categories: Category[] = [];
  @Output() categoryChanged = new EventEmitter<string>();

  selectedCategoryName: string | undefined;

  onCategorySelected(categoryName: string) {
    const cat = this.categories.find(c => c.name === categoryName);

    if (cat) {
      this.selectedCategoryName = cat.name;
      this.categoryChanged.emit(cat.name);
    }
  }
}

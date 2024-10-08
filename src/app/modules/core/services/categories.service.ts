import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../../../core/core.module';
import { Category } from '../../../model';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {
  constructor(private readonly http: HttpClient) { }

  loadCategories(): Promise<Category[]> {
    return this.http
      .get('http://localhost:55564/api/products/categories')
      .toPromise()
      .then(result => result as Category[]);
  }
}

import { Injectable } from '@angular/core';
import BlogJSON from './blog.json';
@Injectable({
  providedIn: 'root',
})
export class GetBlogsService {
  constructor() {}

  generateMockBlogData(count: number) {
    let blogs = BlogJSON;
    return blogs.slice(0, count);
  }
}

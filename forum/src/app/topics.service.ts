import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export type Topic = {
  title:string
}

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics: Topic[] = [];

  constructor(public http:HttpClient) { }

  fetchTopics() {
    this.http.get<any[]>('http://localhost:8000/api/topics')
      .subscribe((result: any[]) => {
        this.topics = result;
      });
  }
}

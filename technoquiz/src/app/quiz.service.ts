import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://quizapi.io/api/v1/questions';
  private apiKey = 'aJi8AEkhmh34zyzIEWgWv6QgXwYADMLHLTMXFQQH';

  constructor(private http: HttpClient) { }

  getTopics() {
    const url = `${this.apiUrl}/categories?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getQuizQuestions(limit: number= 10) {
    const url = `${this.apiUrl}/quiz?apiKey=${this.apiKey}&limit=${limit}`;
    return this.http.get(url);
  }
}

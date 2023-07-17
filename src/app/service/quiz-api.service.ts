import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  public baseUrl: string='https://quizapi.io/api/v1/questions';


  constructor() { }

  async getQuizzes(): Promise<any> {
    try {
      const apiKey = 'aJi8AEkhmh34zyzIEWgWv6QgXwYADMLHLTMXFQQH'; // Replace with your actual API key
      const endpoint = `${this.baseUrl}?apiKey=${apiKey}`;
  
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error retrieving quizzes:', error);
      throw error;
    }
  }
  
  

  getTopics(): Promise<any> {
    const apiKey = 'aJi8AEkhmh34zyzIEWgWv6QgXwYADMLHLTMXFQQH'; // Replace with your actual API key
    const endpoint = `${this.baseUrl}/category=?apiKey=${apiKey}`;

    return axios.get(endpoint)
      .then(response => response.data)
      .catch(error => {
        console.error('Error retrieving categories:', error);
        throw error;
      });
  }
}

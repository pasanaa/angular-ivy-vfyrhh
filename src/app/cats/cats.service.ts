import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CatsService {
  constructor(protected httpClient: HttpClient) {}

  getAll() {
    // Add your code here
  }

  getOne(id: string) {
    // Add your code here
  }
}

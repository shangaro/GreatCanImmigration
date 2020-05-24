import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDetail } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    baseUrl:string="assets/data";
    constructor(private httpClient: HttpClient) { 

    }
    getData(id:number):Observable<CategoryDetail>{
        return this.httpClient.get<CategoryDetail>(`${this.baseUrl}/categoryDetails-${id}.json`);
    
    }
    getHtml(id:number):any{
        this.httpClient.get(`${this.baseUrl}/foo.html`).subscribe(data=>{
            return data;
        })
    }
    
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {
  }

  post(url,data: any){
    return this.http.post(url, data, {
      headers: {
          'Authorization': "Bearer "+localStorage.getItem("ttest"),
      }
    });
  }

  delete(url: string){
    return this.http.delete(url, {
      headers: {
          'Authentication': localStorage.getItem("ttest"),
      }
    });
  }

  get(url){
    return this.http.get(url, {
      headers: {
          'Authorization': "Bearer "+localStorage.getItem("ttest")
      }
    });
  }

  put(url:string,data: any){
    return this.http.put(url,data, {
      headers: {
          'Authorization': 'Bearer '+localStorage.getItem("ttest"),
      }
    });
  }

  autenticathe(){
    const data: any = {
      "password": "14142135",
      "username": "externo"
    }
    this.http.post("http://100.25.38.52:8080/sigmaTest/api/auth/login",data).
    subscribe( (result:any) =>{
        console.log(result);
        localStorage.setItem("ttest",""+result.token);
    },
    error=>{
        console.log(error)
    });
  }
  listUser(){
    return this.get("http://100.25.38.52:8080/sigmaTest/api/administracion/rol");
  }

  listBySearch(nombre:string, description: string){
    return this.get("http://100.25.38.52:8080/sigmaTest/api/administracion/rol/search?nombre="+nombre+"&descripcion="+description);
  }

  registrar(data){
    return this.post("http://100.25.38.52:8080/sigmaTest/api/administracion/rol",data);
  }
  actualizar(data){
    return this.put("http://100.25.38.52:8080/sigmaTest/api/administracion/rol",data);
  }

  getUser(){
    return this.get("http://100.25.38.52:8080/sigmaTest/api/usuario");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://tu-api.com/api/datossensor'; // Reemplaza esto con la URL de tu API

  constructor(private http: HttpClient) {}

  getDatosSensor(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Lista`);
  }

  guardarDatoSensor(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Guardar`, datos);
  }

  editarDatoSensor(datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Editar`, datos);
  }

  eliminarDatoSensor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Eliminar/${id}`);
  }
}

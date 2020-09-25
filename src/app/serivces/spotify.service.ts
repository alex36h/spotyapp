import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Servicio Listo');

   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBE54dhRtMyr5SmFbxIds6yUVUrf5NpPFEz06y_icpqfCIXfwT1HSZphp6VCJUwi1iSmkCd8us8'
    });

     return this.http.get('	https://api.spotify.com/v1/browse/new-releases',{headers});


   }

   getArtista(termino:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDUusRiEyS104oI6IBcFQG94uc2ximoRj_kKLtgtWuLVmMeHkEE4TuqLoSXkiHnO_QqbtraORjquhCDveOj8XojX6zcqzRJLOiXcCpVcfCSJRqo3N_gyI8e-fjAHaFHFPad'
    });

     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});



   }

}

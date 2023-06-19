import { Injectable } from '@angular/core';
import Swal, {SweetAlertOptions} from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class NotificationToastServiceService {

  constructor() { }



    showNotif(){
        Swal.fire({
            text: 'Toast with custom target',
            target: '#custom-target',
            customClass: {
                container: 'position-absolute'
            },
            toast: false,
            position: 'top-right',
            html:"<div>" +
                "<img src='../../../assets/images/logo/logo.png'>" +
                " vous avez une notification de medaminer <br>" +
                "pour rejoindre son evenement next-music </div>",
            confirmButtonText:"accept",
            cancelButtonText:"ignore",
            showCancelButton:true,
            confirmButtonColor:"#298c0c",
            timer:2000,
            backdrop:false,
            buttonsStyling:true
        })
    }
}

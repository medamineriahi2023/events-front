import { Injectable } from '@angular/core';
import Swal, {SweetAlertOptions} from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class NotificationToastServiceService {

  constructor() { }



    showNotif(){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });

        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Replace with the actual path to your image
            imageAlt: 'Image description', // Replace with a description for your image
            html: `
    <div>
      <p>Additional description goes here</p>
    </div>
  `,
            showCancelButton: true,
            confirmButtonText: 'Accept',
            cancelButtonText: 'Ignore',
        }).then((result) => {
            if (result.isConfirmed) {
                // Accept button action
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Ignore button action
            }
        });
    }
}

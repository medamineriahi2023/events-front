import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {WebsocketService} from "./core/notification/WebsocketService";
import {NotificationService} from "./core/notification/NotificationService";
import Swal from "sweetalert2";

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    /**
     * Constructor
     */
    constructor(private keycloakService:KeycloakService,
                private webSocketService: WebsocketService,
                private notificationService:NotificationService)
    {
    }

    ngOnInit(): void {
        this.keycloakService.loadUserProfile().then(e=> {
            this.webSocketService.connect("notif/" + e.id, "notif")
            this.notificationService.notificationMessage.subscribe((data) => {
                console.log('receive notif', data);
                this.notify(data);
            });
        });
    }
    notify(message: any): void {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: ' "' + message.sender.username + '" has invited you to join his staff team for the event "' + message.eventDto.name + '"',
            showConfirmButton: false,
            timer: 4000
        })
    }
}

import {NotificationType} from "./NotificationType";
import {User} from "./User";
import {Event} from "./Event";

export class AppNotification{
    id: number;
    type: NotificationType;
    sender: User;
    receiver: User;
    event: Event;
}

import { User } from "./User";

export class Message {
    id: number;
    sender: User;
    receiver: User;
    date: Date;
    seen: boolean;
    archived: boolean;
}

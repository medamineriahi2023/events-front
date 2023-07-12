import { React } from "./React";
import { User } from "./User";

export class Message {
    id: number;
    seen: boolean
    sender: User;
    receiver: User;
    date: Date;
    archived: boolean;
    text: string;
    react: React;
}

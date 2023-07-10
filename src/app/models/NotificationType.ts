export enum NotificationType{
    STAFF_RECRUITMENT, STAFF_RECRUITMENT_RESPONSE,ORGANIZER_INVITE,ORGANIZER_INVITE_RESPONSE,PARTICIPANT_INVITE,
    PARTICIPANT_INVITE_RESPONSE, STAFF_DEMAND_REQUEST,STAFF_DEMAND_RESPONSE,REMINDER,PUB_REACTION,PUB_TAG,PUB_COMMENTS
}


export const NotificationType2LabelMapping: Record<NotificationType, string> = {
    [NotificationType.STAFF_RECRUITMENT]: "Staff Recruitment",
    [NotificationType.STAFF_RECRUITMENT_RESPONSE]: "Staff Recruitment Response",
    [NotificationType.ORGANIZER_INVITE]: "Organizer Invite",
    [NotificationType.ORGANIZER_INVITE_RESPONSE]: "Organizer Invite Response",
    [NotificationType.PARTICIPANT_INVITE]: "Participant Invite",
    [NotificationType.PARTICIPANT_INVITE_RESPONSE]: "Participant Invite Response",
    [NotificationType.STAFF_DEMAND_REQUEST]: "Staff Demand Request",
    [NotificationType.STAFF_DEMAND_RESPONSE]: "Staff Demand Response",
    [NotificationType.REMINDER]: "Reminder",
    [NotificationType.PUB_REACTION]: "Publication Reaction",
    [NotificationType.PUB_TAG]: "Publication Tag",
    [NotificationType.PUB_COMMENTS]: "Publication Comments"
  };
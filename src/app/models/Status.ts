export enum Status {
    RECLAMATION,SUGGESTION
}

export const Status2LabelMapping: Record<Status, string> = {
    [Status.RECLAMATION]: "Reclamation",
    [Status.SUGGESTION]: "Suggestion",
  };

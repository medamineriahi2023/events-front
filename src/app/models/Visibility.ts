export enum Visibility {
    PRIVATE,PUBLIC
}

export const Visibility2LabelMapping: Record<Visibility, string> = {
    [Visibility.PRIVATE]: "Private",
    [Visibility.PUBLIC]: "Public",
  };
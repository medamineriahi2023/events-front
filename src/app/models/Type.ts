export enum Type {
    ONLINE,PRESENTIEL
}
export const Type2LabelMapping: Record<Type, string> = {
    [Type.ONLINE]: "Online",
    [Type.PRESENTIEL]: "Presential",
  };
type interactions = {
  hovered?: boolean;
  clicked?: boolean;
  focused?: boolean;
};
export type Option = {
  id: number;
  label?: string;
  value?: string;
  active?: boolean;
  interaction?: interactions;
};

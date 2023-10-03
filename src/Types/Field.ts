export interface Field {
  type: "text" | "longtext" | "dropdown" | "number";
  default_value?: string | number | boolean;
  value?: string | number | boolean;
  validation?: string;
  min_value?: number;
  max_value?: number;
  options?: (string | number)[];
}

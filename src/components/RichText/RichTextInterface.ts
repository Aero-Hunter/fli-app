export interface Root {
  nodeType: string;
  data: unknown;
  content: Content[];
}

export interface Content {
  nodeType: string;
  value: string;
  marks: Mark[];
  data: unknown;
}

export interface Mark {
  type: string;
}

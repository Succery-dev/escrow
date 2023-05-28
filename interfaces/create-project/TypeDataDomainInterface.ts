interface TypedDataDomaiInterface {
  domain: {
    name: string;
    chainId: string;
  };
  types: {
    ProjectStruct: Array<{ name: string; type: string }>;
  };
}

export type { TypedDataDomaiInterface };

export const useGenerateSchemaEntityName = (schema: string, entity: string) =>
  `${schema}."${entity}"`;

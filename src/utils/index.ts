import { EnumType } from 'typescript';

export const getEnumValuesAsArr = (enumToGet: EnumType) => {
  return Object.keys(enumToGet).map((k) => enumToGet[k as keyof EnumType]);
};

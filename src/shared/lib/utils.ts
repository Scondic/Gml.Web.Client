import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const enumValues = <T extends Record<string, unknown>>(enumEntity: T) =>
  Object.entries(enumEntity).filter(([key]) => Number.isNaN(+key));

export const emptyArray = (length: number) => Array(length).fill(1);

import { SortOrder } from "mongoose";

export type SortDocumentType = string | { [key: string]: SortOrder | { $meta: any } } | [string, SortOrder][] | undefined | null;
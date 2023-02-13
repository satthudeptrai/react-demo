export interface BaseRequestModel {
  search?: string;
}

export type PaginableData<T> = {
  data: T[];

  first?: boolean;
  last?: boolean;
  pageSize?: number;
  totalPage: number;
  totalRecords: number;
};

export interface ResponseResult<T> {
  Code: number;
  Message: string;
  Value: T;
}

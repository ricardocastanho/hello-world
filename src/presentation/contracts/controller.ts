export interface Controller<T = any> {
  handle: () => Promise<T>
}

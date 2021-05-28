export interface Controller<T = any> {
  handle: () => T
}

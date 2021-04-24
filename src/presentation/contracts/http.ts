export type HttpResponse<T = any> = {
  data: T
}

export const serverError = (error: Error): HttpResponse => ({
  data: error.stack
})

export const ok = (data: any): HttpResponse => ({
  data
})

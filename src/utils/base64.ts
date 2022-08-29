export const encode = (val: any): string => {
  return btoa(JSON.stringify(val))
}

export const decode = (str: string): any => {
  return JSON.parse(atob(str))
}

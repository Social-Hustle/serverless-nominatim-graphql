export const encode = (str: string): string => {
  return btoa(str)
}

export const decode = (str: string): string => {
  return atob(str)
}

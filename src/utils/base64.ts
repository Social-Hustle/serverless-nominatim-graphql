export const encode = (args: any) => {
  // btoa(JSON.stringify(args))
  const str = JSON.stringify(args)
  const buff = new (Buffer.from as any)(str)
  return buff.toString('base64')
}

export const decode = (str: string) => {
  //JSON.parse(atob(str))
  //const buff = new Buffer.from(str, "base64")
  const buff = new Buffer(str, 'base64')
  const newStr = buff.toString('ascii')
  const json = JSON.parse(newStr)
  return json
}

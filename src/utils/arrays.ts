export const arrayContainsAll = (haystack: [], needles: []) =>
  needles.every((element) => {
    return Array.isArray(haystack) ? haystack.includes(element) : false
  })

export const arrayContainsOne = (haystack: [], needles: []) =>
  needles.some((element) => {
    return Array.isArray(haystack) ? haystack.includes(element) : false
  })

export const arrayFromNumber = (number: number): number[] =>
  Array.from(Array(number).keys())

export const removeDuplicates = (array: any[]): any[] => {
  const unique: any[] = array.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr)
    return acc
  }, [])
  return unique
}

export function sliceIntoChunks<T = any>(
  arr: T[],
  chunkSize: number,
): Array<T[]> {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

export function mergeArrays<T = any>(array: T[][]): T[] {
  return array.reduce((acc, curr) => {
    return [...acc, ...curr]
  }, [])
}

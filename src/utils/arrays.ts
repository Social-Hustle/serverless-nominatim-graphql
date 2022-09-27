export const arrayContainsAll = (haystack: [], needles: []) =>
  needles.every((element) => {
    return Array.isArray(haystack) ? haystack.includes(element) : false
  })

export const arrayContainsOne = (haystack: [], needles: []) =>
  needles.some((element) => {
    return Array.isArray(haystack) ? haystack.includes(element) : false
  })

export const mutableArrayMerge = (array1: [], array2: []) => {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    const newArray = array1.concat(array2)
    const filtered = newArray.filter((item, index) => {
      return newArray.indexOf(item) == index
    })
    return filtered
  } else return []
}

export const arrayFromNumber = (number: number): number[] =>
  Array.from(Array(number).keys())

export const removeDuplicates = (array: any[]): any[] => {
  const unique: any[] = array.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr)
    return acc
  }, [])
  return unique
}

export function sliceIntoChunks(arr: any[], chunkSize: number) {
  const res: any[] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

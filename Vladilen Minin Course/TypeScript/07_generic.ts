const arrOfNumbers: Array<number> = [1,1,2,3,5]
const arrOfString: Array<string> = ['Hello', 'Nazar']

function reverse<T>(arr: T[]): T[] {
  return arr.reverse()
}

reverse(arrOfNumbers)
reverse(arrOfString)
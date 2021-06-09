const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42

const float: number = 4.2

const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3]

const numberArr2: Array<number> = [1, 1, 2, 3]

const words: string[] = ['Hello Typescript']

// Tuple

const contact: [string, number] = ['Vladilen', 1234567]

// Any

let variable: any = 42
variable = 'New String'

// Function

function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Nazar')

// Never

function throwError(message: string): never {
  throw new Error(message)
}

function infinite (): never{
  while(true) {
  }
}

// Type

type Login = string

const loggin: Login = 'admin'

type ID = string | number

const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined


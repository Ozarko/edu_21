class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }
  info(name: string): string {
    return `[${name}]: Typescript version`
  }
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number
//   constructor(theModel: string) {
//     this.model = theModel
//   }


// }

class Car {
  readonly numberOfWheels: number
  constructor(readonly model: string) {
  }
}

// ===================================

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()

cat.setVice('Myau')
cat.color

// =======================================

abstract class Component {
  abstract render(): void 
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }
  info(): string {
    return 'This is info'
  }
}
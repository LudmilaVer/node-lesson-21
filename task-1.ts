abstract class Animal {
    abstract makeSound(): void
  }
  
  class Dog extends Animal {
    makeSound(): void {
        console.log('Waw');
        
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
        console.log('Meu');
        
    }
  }
  
  const animals: Animal[] = [new Dog(), new Cat()]
  
  animals.forEach(animal => {
    animal.makeSound()
  });
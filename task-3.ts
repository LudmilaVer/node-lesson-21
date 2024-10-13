abstract class Appliance{
    abstract turnOn(): void
    abstract turnOff(): void
  }
  
  class WashingMachine extends Appliance {
    turnOn(): void {
        console.log('The washing machine turnon');
        
    }
    turnOff(): void {
        console.log('The washing machine turnoff');
        
    }
  }
  
  class Refrigerator extends Appliance {
    turnOn(): void {
        console.log('The refrigerator turnon');
        
    }
    turnOff(): void {
        console.log('The refrigerator turnoff');
        
    }
  }
  
  const technique: Appliance[] = [new WashingMachine(), new Refrigerator()]
  technique.forEach(unit => {
    unit.turnOn()
    unit.turnOff()
  })
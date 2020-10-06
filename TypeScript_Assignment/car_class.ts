export class car
{
    private carColour;
    private engineCapacity;
    private noOfCyllinders;

    constructor( carColour: string, engineCapacity: String, noOfCyllinders: number)
    {
        this.carColour = carColour;
        this.engineCapacity = engineCapacity;
        this.noOfCyllinders = noOfCyllinders;
    }

    startCar()
    {
        console.log(`\t\tThe ${this.carColour} coloured car is started`)
    }

    stopCar()
    {
        console.log(`\t\tThe ${this.carColour} coloured car is stopped`)
    }

    AccelerateCar()
    {
        console.log(`\t\tThe car with Engine capacity of ${this.engineCapacity} and with ${this.noOfCyllinders} is accelerated`)
    }

    openCarLock()
    {
        console.log(`\n\t\tThe car having capacity Engine capacity of ${this.engineCapacity} is unlocked`)
    }

    closeCarLock()
    {
        console.log(`\t\tThe car having capacity Engine capacity of ${this.engineCapacity} is Locked`)
    }


}

const best = new car("Grey", "10 HP", 4)

best.openCarLock()
best.startCar()
best.AccelerateCar()
best.stopCar()
best.closeCarLock()
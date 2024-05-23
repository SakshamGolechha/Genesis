class TwoW {
    constructor(id,model,date,isRented){
        this.id=id;
        this.model=model;
        this.date=date;
        this.isRented=false;
    }

    rent(){
        if(this.isRented==true){
            console.log("The car is already rented");
        }
        this.isRented=true;
        console.log("The car is successfully rented");
    }

    returnVehicle(){
        if(this.isRented==false){
            console.log("The car is not rented");
        }
        this.isRented=false;
        console.log("The car is successfully returned");
    }
}


class FourW {
    constructor(id,model,date){
        this.id=id;
        this.model=model;
        this.date=date;
        this.isRented=false;
    }

    rent(){
        if(this.isRented==true){
            console.log("The car is already rented");
        }
        this.isRented=true;
        console.log("The car is successfully rented");
    }

    returnVehicle(){
        if(this.isRented==false){
            console.log("The car is not rented");
        }
        this.isRented=false;
        console.log("The car is successfully returned");
    }
}

class VehicleManagement{
    constructor(){
        this.allVehicles=[];
    }

    addVehicle(vehicle) {
        this.allVehicles.push(vehicle);
        console.log(`Vehicle added successfully.`);
      }

      removeVehicle(id) {
        const index = this.allVehicles.findIndex(vehicle => vehicle.id === id && vehicle.isRented==false);
        if (index !== -1 ) {
          this.allVehicles.splice(index, 1);
          console.log(`Vehicle removed successfully.`);
        } else {
          console.log(`Vehicle not found.`);
        }
      }
      
      listVehicles() {
        console.log('Listing all vehicles:');
        this.allVehicles.forEach(vehicle => {
          console.log(`${vehicle.id}: ${vehicle.model} (${vehicle.date}) - ${vehicle.isRented ? 'Rented' : 'Not Rented'}`);
        });
      }
      rentVehicle(id) {
        const vehicle = this.allVehicles.find(vehicle => vehicle.id === id);
        if (vehicle) {
          vehicle.rent();
        } else {
          console.log(`Vehicle ${id} not found.`);
        }
      }
    
      returnVehicle(id) {
        const vehicle = this.allVehicles.find(vehicle => vehicle.id === id);
        if (vehicle) {
          vehicle.returnVehicle();
        } else {
          console.log(`Vehicle not found.`);
        }
      }
}


const vehicleManage= new VehicleManagement();

const bike1= new TwoW('1','Splendor','11-02-22');
const car1= new TwoW('2','BMW','12-02-22');

vehicleManage.addVehicle(car1);
vehicleManage.addVehicle(bike1);
vehicleManage.listVehicles();
vehicleManage.rentVehicle('1');
vehicleManage.listVehicles();
vehicleManage.removeVehicle('1');
vehicleManage.listVehicles();

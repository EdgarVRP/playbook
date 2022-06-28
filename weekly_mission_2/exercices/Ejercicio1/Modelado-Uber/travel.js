const travel = {
    name: "Edgar Valentin Ruiz Padilla",
    userId: "EdgarVRP",
    email: "edgarvrp22@gmail.com",
    telephone: 9994757964,
    destination: 'CENIDET',
    from: 'cuernavaca centro',
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El usuario ${this.userId} se encuentra en: ${this.from}, solicito un viaje a: ${this.destination}`
    }
  }

  console.log("El dueño de la cuenta " + travel.userId+ " se llama "+travel.name+ "se dirige a "+ travel.destination)
  console.log("Obteniendo el nombre de usuario: " + travel.getuserId())
  console.log(travel.getGeneralInfo())
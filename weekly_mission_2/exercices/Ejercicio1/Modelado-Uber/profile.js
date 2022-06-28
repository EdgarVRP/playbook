const profile = {
    name: "Edgar Valentin Ruiz Padilla",
    userId: "EdgarVRP",
    email: "edgarvrp22@gmail.com",
    travels: 30,
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El usuario ${this.userId} ha realizado ${this.travels} viajes`
    }
  }

  console.log("El dueño de la cuenta " + profile.userId+ " se llama "+profile.name)
  console.log("Obteniendo el nombre de usuario: " + profile.getuserId())
  console.log(profile.getGeneralInfo())
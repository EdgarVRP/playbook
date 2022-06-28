const user = {
    name: "Edgar Valentin Ruiz Padilla",
    userId: "EdgarVRP",
    email: "edgarvrp22@gmail.com",
    numberTweets:"15",
    follows:"100",
    followers:"10",
    lastTimeOnline:'02-06-2022',
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El usuario ${this.userId} sigue a ${this.follows} cuentas y lo siguen ${this.followers}`
    }
  }

  console.log("El dueño de la cuenta " + user.userId+ " se llama "+user.name)
  console.log("Obteniendo el nombre de usuario: " + user.getuserId())
  console.log(user.getGeneralInfo())
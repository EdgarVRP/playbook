const bio = {
    name: "Edgar Valentin Ruiz Padilla",
    userId: "EdgarVRP",
    email: "edgarvrp22@gmail.com",
    photos:"150",
    friends:"100",
    post:"200",
    lastTimeOnline:'02-06-2022',

    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El usuario ${this.userId} ha cargado ${this.photos} fotos, tiene ${this.friends} amigos y ha hecho ${this.post} publicaciones`
    }
  }

  console.log("El dueño de la cuenta " + bio.userId+ " se llama "+bio.name)
  console.log("Obteniendo el nombre de usuario: " + bio.getuserId())
  console.log(bio.getGeneralInfo())
const post = {
    userId: "EdgarVRP",
    photos:150,
    post:200,
    reaction1: 1000,
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El usuario ${this.userId} ha cargado ${this.photos} fotos y ha reaccionado ${this.reaction1} veces`
    }
  }

  console.log("La cuenta " + post.userId+ " ha reaccionado "+post.reaction1+" veces")
  console.log("Obteniendo el nombre de usuario: " + post.getuserId())
  console.log(post.getGeneralInfo())
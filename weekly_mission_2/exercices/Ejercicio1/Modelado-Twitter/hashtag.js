const hashtag = {
    userId: "EdgarVRP",
    hashtagPersonalUser:['#Personal1','#Personal2','#Personal3','#Personal4','#Personal5'],
    hashtagTrendingTopic:['#Trending1','#Trending2','#Trending3','#Trending4','#Trending5'],
    hashtagNews:['#News1','#News2','#News3','#News4','#News5'],
    hashtagSports:['#Sports1','#Sports2','#Sports3','#Sports4','#Sports5'],
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El hastag #1 del usuairo ${this.userId} es ${this.hashtagPersonalUser[0]}`
    }
  }

  console.log("El dueño de la cuenta es " + hashtag.userId+ " le aparece como hashtag de trendig topic: "+hashtag.hashtagTrendingTopic[0])
  console.log("Obteniendo el nombre de usuario: " + hashtag.getuserId())
  console.log(hashtag.getGeneralInfo())
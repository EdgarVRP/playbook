const trending_topic = {
    userId: "EdgarVRP",
    forUser: ['TopicPersonal1','TopicPersona2',,'TopicPersonal3','TopicPersonal4','TopicPersonal5'],
    trending_topicMundial: ['Topic1','Topic2',,'Topic3','Topic4','Topic5'],
    News: ['NewsTopic1','NewsTopic2','NewsTopic3','NewsTopic4','NewsTopic5'],
    sports: ['SportTopic1','SportTopic2','SportTopic3','SportTopic4','SportTopic5'],
    Entertainment: ['EntTopic1','EntTopic2','EntTopic3','EntTopic4','EntTopic5'],
    getuserId: function(){
      return this.userId
    },
    getGeneralInfo: function(){
      return `El trending topic #1 personalizado del usuario ${this.userId} es ${this.forUser[0]}`
    }
  }

  console.log("El trending topic mundial #1 es: "+trending_topic.trending_topicMundial[0])
  console.log("Obteniendo el nombre de usuario: " + trending_topic.getuserId())
  console.log(trending_topic.getGeneralInfo())
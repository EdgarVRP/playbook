const Issue = {
    title: "Issue #1",
    repositoryNameAssociated: "playbook",
    status: "wrong",
    numberOfComments:"15",
    labels:"2",
    author:"EdgarVRP",
    dateCreated: "01-06-2022",
    lastUpdated:'02-06-2022',
    getTitleAndAuthor: function(){
      return this.title + this.author
    },
    getGeneralInfo: function(){
      return `This Issue ${this.title} was created by ${this.author}`
    }
  }
  
  console.log("Titulo del repo:" + Issue.title)
  console.log("Obteniendo Titulo y autor " + Issue.getTitleAndAuthor())
  console.log(Issue.getGeneralInfo())
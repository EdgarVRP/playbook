const PullRequest = {
    title: "Agregando funciones",
    branchName: "production",
    dateCreated: "01-06-2022",
    status: "wrong",
    repositoryNameAssociated: "playbook",
    author:"EdgarVRP",
    getStatus: function(){
      return this.status
    },
    getTitleAndAuthor: function(){
      return `El titulo del pull request es: ${this.title} creado por ${this.author}`
    }
  }
  
  console.log("Titulo del pull request es: " + PullRequest.title)
  console.log("El status del PR es: " + PullRequest.getStatus())
  console.log(PullRequest.getTitleAndAuthor())
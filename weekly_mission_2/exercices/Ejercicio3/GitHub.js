// Ejemplo 5: Atributos con valores por default
class Issue {
    constructor(labels, author, dateCreated,lastUpdated){
        this.title= "Issue #1"
        this.repositoryNameAssociated= "playbook"
        this.status= "wrong"
        this.numberOfComments="15"
        this.labels=labels
        this.author=author
        this.dateCreated= dateCreated
        this.lastUpdated=lastUpdated
      }
      getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
      }
      getTitleAndAuthor(){
        return this.title + this.author
      }
      getGeneralInfo(){
        return `This Issue ${this.title} was created by ${this.author}`
      }
  }
  console.log("Ejercicio 3, creando Issue en GitHub")
  const Issue1 = new Issue("2","EdgarVRP","01-06-2022",'02-06-2022')
  console.log(Issue1.getInfo())
  console.log(Issue1.getTitleAndAuthor())
  console.log(Issue1.getGeneralInfo())
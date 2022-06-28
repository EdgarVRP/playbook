const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
  ]
//1* Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
//for convencional
for (var x in [0,1,2]) {
  console.log(explorers[x].name)
}
//for each
const numbers = [0, 1, 2];
console.log("Ejercicio 1 mostrando nombres")
numbers.forEach(num => console.log(explorers[num].name))
//2* Imprime el stack de cada explorer, usa FOR EACH
console.log("Ejercicio 2 mostrando stack de explorers")
numbers.forEach(num => console.log(explorers[num].stack))
//3* Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const numbersSquare = numbers.map(function(num){ return explorers[num].stack})
console.log("Ejercicio 3: lista de stacks usando MAP")
console.log(numbersSquare)
//4* Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stackJs = explorers.filter((explorers) => explorers.stack.includes('js'))
console.log("Ejercicio 4: Filtrando stack js")
console.log(stackJs)
//5* Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Ejercicio 5 encontrando explorers de la CDMX")
const explorerCDMX = explorers.find((explorers) => explorers.city.includes('CDMX'))
console.log(explorerCDMX)


//6* Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Ejercicio 6: Obteniendo la suma de los ejercicios completados")
const listaEjerciciosCompletos = numbers.map(function(num){ return explorers[num].exercises_completed})
var total = listaEjerciciosCompletos.reduce(function(a, b){ return a + b; });
console.log(total)



//7* Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Ejercicio 7: Validando que los explorers en front end han terminado los ejercicios")
const listaEjerciciosTerminados = numbers.map(function(num){ return explorers[num].missions.frontend.exercisesFinished})
console.log(listaEjerciciosTerminados)
const areSomeTrue = listaEjerciciosTerminados.some((b) =>  b === true)
console.log('Algun explorer ya termino algun ejercicio de frontend? '+areSomeTrue) //true


//8* Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("Ejercicio 8: Validando que los explorers en onboarding han terminado los ejercicios")
const listaEjerciciosTerminadosOnboarding = numbers.map(function(num){ return explorers[num].missions.onboarding.exercisesFinished})
console.log(listaEjerciciosTerminadosOnboarding)


const areAllStr = listaEjerciciosTerminadosOnboarding.every((boolean) => boolean === true) // every
console.log('Todos los explorers han terminado los ejercicios del onboarding? '+areAllStr)
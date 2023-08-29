const App = require("./App")

App.createUser("leonardo@email.com", "Leonardo Ramidan")
App.createUser("marco@email.com", "Marco Silva")
App.createUser("eliane@email.com", "Eliane Correa")

App.deposit("leonardo@email.com", 100)

App.transfer("leonardo@email.com", "marco@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("eliane@email.com", 2000, 24)

console.log(App.findUser("leonardo@email.com"))
console.log(App.findUser("leonardo@email.com").account)
console.log(App.findUser("marco@email.com"))
console.log(App.findUser("marco@email.com").account)
console.log(App.findUser("eliane@email.com"))
console.log(App.findUser("eliane@email.com").account)
console.log(App.findUser("eliane@email.com").account.loans[0].installments)
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction){

  user.transactions.push(transaction)
  
  if(transaction.type === 'credit'){
    user.balance = user.balance + transaction.value
  }else{
    user.balance = user.balance - transaction.value      
  }                                      
}

function getHigherTransactionByType(type){

let higherTransaction 
let higherValue = 0

for( let transactionVar of user.transactions ){
  if(transactionVar.type == type &&
  transactionVar.value > higherValue){
    higherValue = transactionVar.value
    higherTransaction = transactionVar

  }
}
return higherTransaction
}

let average

function getAverageTransactionValue() {
  let sum = 0

  for(let transactionVar of user.transactions) {
      sum += transactionVar.value
      average = sum / user.transactions.length
  }

  return sum / user.transactions.length
}

function getTransactionsCount() {
 const count = { debit: 0, credit: 0 }
  for(let transactionVar of user.transactions){
      if(transactionVar.type == 'debit'){
          count.debit++    
      }else{
          count.credit++
      }
  }

  return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }
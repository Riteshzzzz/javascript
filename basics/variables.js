const accountId = 14452
let accountEmail = "jilajawa@bihar.com"
var accountPassword = "Ritesh"
accountCity = "Buxar"
let accountState 

// accountId = 2 not allowed

// accountEmail = "hd"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])


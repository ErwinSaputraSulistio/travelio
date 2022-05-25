const db = require("../configs/db")
const queryDB = (resolve, reject, query) => {
   db.query(query, (error, result) => {
      if(error) { reject(error) }
      else { resolve(result.rows[0]) }
   })
}

class userModel {
   static createUser = (username) => {
      const registerQuery = "INSERT INTO users(username) VALUES('" + username + "');"
      return new Promise((resolve, reject) => {
         queryDB(resolve, reject, registerQuery)
      })
   }
   static checkUser = (username) => {
      const loginQuery = "SELECT * FROM users WHERE username = '" + username + "'"
      return new Promise((resolve, reject) => {
         queryDB(resolve, reject, loginQuery)
      })
   }
}

module.exports = userModel
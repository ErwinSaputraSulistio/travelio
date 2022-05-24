class userController {
   static checkIn = async(req, res) => {
      res.status(200).json({
         status: "--> OK.",
         message: "Thanks, Erwin."
      })
   }
}

module.exports = userController
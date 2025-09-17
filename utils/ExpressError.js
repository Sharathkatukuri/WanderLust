// class ExpressError extends Error {
//   constructor(status, message) {
//     super();
//     this.status = status;
//     this.message = message;
//   }
// }
class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ExpressError;
// ...existing code...
// class ExpressError extends Error {
//     constructor(statusCode = 500, message = 'Something went wrong') {
//         super(message);
//         this.statusCode = statusCode;
//         this.name = this.constructor.name;
//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, this.constructor);
//         }
//     }
// }

// module.exports = ExpressError;
// ...existing code...
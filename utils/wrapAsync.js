module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};


// ...existing code...
// module.exports = (fn) => {
//     return (req, res, next) => {
//         // Ensure both synchronous throws and rejected promises are forwarded to next()
//         Promise.resolve(fn(req, res, next)).catch(next);
//     };
// };
// ...existing code...
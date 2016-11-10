module.exports = function(req, res, next) {
  res.write('Hello world ');
  res.end('The time is ' + Date.now());
};
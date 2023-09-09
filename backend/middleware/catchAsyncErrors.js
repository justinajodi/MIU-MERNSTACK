//ham jab name nahi dege post me toh woserver crash kardega isiliye async error ko try catch blockse handle karo 
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

module.exports = function check(str, bracketsConfig) {
  let count = 0
       for (let i = 0; i < bracketsConfig.length; i++) {
         if (bracketsConfig[i] == '(') {
           count++;
         }
         else if (bracketsConfig[i] == ')') {
          if (count == 0) {
            return false
           }
               count--
         }
       }

       if (count == 0) {
         return true
       }
       return false
}

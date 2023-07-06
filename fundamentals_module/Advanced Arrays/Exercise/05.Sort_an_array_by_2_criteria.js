function sort(){

    function orderStrings(array) {
        
        array.sort((a, b) => {
          if (a.length !== b.length) {
            return a.length - b.length;
          } else {

            return a.toLowerCase().localeCompare(b.toLowerCase());
          }
        });
      
        
        return array;
      }
      
      const strings = ['banana', 'Apple', 'Cherry', 'date', 'apricot', 'Blueberry'];
      const orderedArray = orderStrings(strings);
      orderedArray.forEach(str => console.log(str));
      

}
sort(['alpha','beta','gamma']);
/**JSON = (Javascript Object Notation) data-interchange format
 *          used for exchanging data between a server and a web 
 *          application JSON file {key: value} OR [value1, value2, value3]
 * 
 *          JSON.stringify() = converts a JS object to a JSON string
 *          JSON.parse() = converts JSON string to JS object
 */
let JujutsuSorceror;
fetch("peole.json")
    .then(response=> response.json())//response.json returns a promise
                                    //that's why we are using another .then()
    .then(values => {JujutsuSorceror=values;
                    const JujustsuPeople=JSON.stringify(JujutsuSorceror);
                    console.log(JujustsuPeople);
                    //returns a string
                    console.log(JujutsuSorceror);
                    //returns a JS object    
                });

/** fetch API is asynchronous, and the code following the fetch
 *  statement is executed before the asynchronous operation
 *  completes.
 * To work with the fetched data, you should place the relevant
 *  code inside the second then block*/                    
let promise = new Promise(function(resolve, reject) {

    if (success) {
        resolve("Done!");
    } else {
        reject("Error!");
    }
});
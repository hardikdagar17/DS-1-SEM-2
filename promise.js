const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

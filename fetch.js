// fetch("https://fakestoreapi.com/products")
//     .then   ((products) => products.json())
//     .then   ((data) => console.log(data))
//     .catch  (error => console.error(error));

const getData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("fetch error");
    }
}
getData();  
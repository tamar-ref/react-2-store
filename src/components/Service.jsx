export default function getProducts() {

    const arr = fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));

    return arr;
}
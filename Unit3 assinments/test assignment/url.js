/* let url = "https://example.com?foo=1&bar=2"



let u= new URL(url)
let params = new URLSearchParams(u.search);

let f =params.get("foo");



console.log(f) */

function searchParams(url, param){
let u= new URL(url)
let params = new URLSearchParams(u.search);

let f =params.get(param);
return f
}


export default searchParams;
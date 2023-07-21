//! CRUD
options={method:"POST",body:JSON.stringify({title:"group 85",body:"group 85 first post",userId:101}),headers:{"Content-type":"application/json"}},fetch("https://jsonplaceholder.typicode.com/posts",options).then((o=>{if(console.log(o),!o.ok)throw new Error(o.statusText);return o.json()})).then((o=>console.log(o))).catch((o=>console.log(o))),fetch("https://jsonplaceholder.typicode.com/posts/101").then((o=>o.json())).then((o=>console.log(o)));
//# sourceMappingURL=index.8af8d57a.js.map

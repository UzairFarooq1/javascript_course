const posts = [
    { title : 'Post 1' , body: 'This is Post 1'},
    { title : 'Post 2' , body: 'This is Post 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    } , 1000);
}
//Callbacks
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            if(!error){
                resolve();
            } else{
                reject('Errorrrr!')
            }
        },2000)
    })

}

// createPost({title: 'Post Three' , body : 'This is post Three' })
// .then(getPosts)
// .catch(err => console.log(err)
// );


//Async Await
// async function init() {
//     await createPost({title: 'Post Three' , body : 'This is post Three' })

//     getPosts();
// }

// init();


//Async Await with Fetch

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);  
}
fetchUsers()


// Promise.all
// const promise1 = Promise.resolve('Hello Promise!');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>
//     setTimeout(resolve, 2000 , 'GoodBye')
// )
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1,promise2,promise3,promise4]).then (values => console.log(values));



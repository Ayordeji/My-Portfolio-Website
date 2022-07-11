function renderSingle() {
    
    let newObject = localStorage.getItem('viewedPost')
    console.log(newObject);
    
    let post = JSON.parse(newObject)
    console.log(post)
        
    document.getElementById('post-id').innerHTML = post.id
    document.getElementById('post-title').innerHTML = post.title
    document.getElementById('post-body').innerHTML = post.body
}

renderSingle();

const edit = document.querySelector(".blog");


    console.log("edit");

//let url = "https://dwolverton.github.io/fe-demo/data/blog-posts.json";
let url = "Ham Sandwich";
$.get(url).done( (data)=>{
    for(let i = 0; i<data.posts.length; i++){
        console.log(`Post Number ${i}`)
        let postTags = data.posts[i].tags;
        ///console.log(postTags);
        for(let j = 0; j<postTags.length; j++){
            console.log(postTags[j]);
        }
        console.log('--------');
    }
}).fail( ()=>{
    console.log("Calling the API did not work!");
})
.always(()=>{
    console.log("I always get run, rain sleet or shine")
});


$.get(url).then( (data)=>{
    for(let i = 0; i<data.posts.length; i++){
        console.log(`Post Number ${i}`)
        let postTags = data.posts[i].tags;
        ///console.log(postTags);
        for(let j = 0; j<postTags.length; j++){
            console.log(postTags[j]);
        }
        console.log('--------');
    }
}).catch( (err)=>{
    console.log("Calling the API did not work!");
    console.log(err);
})
.always(()=>{
    console.log("I always get run, rain sleet or shine")
});
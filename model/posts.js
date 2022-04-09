module.exports = {

    posts: [
        {
    id: "dsakasdkasdklsad",
    title: "Hello mans",
    description: "Acesse meu linkedin https://www.linkedin.com/in/arthur-filho/"  
     }
    ],

     getAll(){

        return this.posts;
     },
 
     newPost(title, description){
        this.posts.push({id: generateID(), title ,description});

      
     }
    }

//function generate id
function generateID(){
    return Math.random().toString(36).substr(2, 9);
};


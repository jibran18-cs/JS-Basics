const followers =document.querySelector('.followers-heading')
const img= document.querySelector('#image')
const button= document.querySelector('#btn')

const requestURL= 'https://api.github.com/users/hiteshchoudhary'
const xhr= new XMLHttpRequest()
xhr.open('GET', requestURL ) //Request not yet called
xhr.onreadystatechange= function(){
    // console.log(xhr.readyState);
    
    if (xhr.readyState===4) {
        //As this response was in string form but for using it we have to convert it to object
    const data=(this.responseText)
    show(data)
    }
    function show(data){
        button.addEventListener('click', function(){
            followers.innerHTML=`Followers: ${data.followers}`
            img.src=data.avatar_url
            button.remove()
        })
        
    }
    
}

xhr.send()





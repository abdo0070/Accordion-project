let contents = document.getElementsByClassName('content-container');

for(var i = 0 ; i < contents.length ; i++){
    contents[i].addEventListener('click',function(){   
         this.classList.toggle('active');
    });
}

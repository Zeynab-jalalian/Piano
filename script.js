const pianokeys=document.querySelectorAll('.piano-keys .key');
pianokeys.forEach(function(key){
    key.addEventListener('click',function(){
        console.log('key'+key.dataset.key+'clicked');
        
    })
})

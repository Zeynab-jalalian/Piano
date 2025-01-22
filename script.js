const pianokeys=document.querySelectorAll('.piano-keys .key');
pianokeys.forEach(function(key){
    key.addEventListener('click',function(){
      const keySound=key.dataset.key;
     const audio=new Audio(`notes/${keySound}.mp3`);
        audio.play();

        key.classList.add('active');
        setTimeout(function(){
            key.classList.remove('active');
        },200)
    })
})

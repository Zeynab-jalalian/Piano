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

window.addEventListener('keydown',function(event){
    const key=document.querySelector(`.key[data-key="${event.key}"]`);
    if(key){
        const keySound=key.dataset.key;
        const audio=new Audio(`notes/${keySound}.mp3`);
           audio.play();
           key.classList.remove('active');
    }
})
window.addEventListener('keyup',function(event){
    const key=document.querySelector(`.key[data-key="${event.key}"]`);
    if(key){
        key.classList.remove('active');
    }
})
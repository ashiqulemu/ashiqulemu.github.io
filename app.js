
 window.addEventListener('scroll',function(){
 
  console.log( window.pageYOffset);

    let sec2LeftDoor = document.getElementById("sec2LeftDoor"); 
         sec2LeftDoor.style.left = - window.pageYOffset +'px';

    let sec2RightDoor = document.getElementById("sec2RightDoor"); 
         sec2RightDoor.style.right = - window.pageYOffset +'px';

    let sec3LeftDoor = document.getElementById("sec3LeftDoor"); 
         sec3LeftDoor.style.left =  - window.pageYOffset / 2 + 'px';

    let sec3RightDoor = document.getElementById("sec3RightDoor"); 
         sec3RightDoor.style.right = - window.pageYOffset / 2 + 'px';  

    let sec4LeftDoor = document.getElementById("sec4LeftDoor"); 
         sec4LeftDoor.style.left =  - window.pageYOffset / 3 + 'px';

    let sec4RightDoor = document.getElementById("sec4RightDoor"); 
        sec4RightDoor.style.right = - window.pageYOffset / 3 + 'px';

 })
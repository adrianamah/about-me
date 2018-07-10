document.addEventListener("DOMContentLoaded",
function(){

    alert("Hello World!");
    let myphoto=document.getElementById("chellaphoto")

    myphoto.addEventListener("click", changeImage)


    function changeImage(){
        if (myphoto.src=="file:///Users/girlswhocode2018/Desktop/IMG_8812.JPG"){
            myphoto.src="IMG_8704.jpg"
            }
            else{
                myphoto.src="firstChella.JPG"
            }


        console.log("heyy");2
    }


}) //end of DOM content DOM Content Loaded


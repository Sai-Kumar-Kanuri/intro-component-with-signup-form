function error_msg()
{
    let input_array=document.getElementsByClassName('border-color');
    let text_array=document.getElementsByClassName('error-text');
    let icon_array=document.getElementsByClassName('error-icon');

    for (let index = 0; index < input_array.length; index++) {

       console.log( !input_array[index].value)
        
        if(!input_array[index].value){
           text_array[index].style.visibility="visible";
           icon_array[index].style.visibility="visible";
           input_array[index].style.borderColor="hsl(0, 100%, 74%)"
           input_array[index].placeholder="";

        }
        input_array[2].placeholder="email@example/com"
    }

}
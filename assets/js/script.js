// add a click event listener on the form submit button
let boutton =(document.querySelector("#comment-submit")) ;
let action = (boutton) =>
{
    boutton.preventDefault();
    boutton.currentTarget.style.color="red";
}
boutton.addEventListener("click", action) ;

// don't forget to "prevent" the form from being sent

// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// new comments must have the same HTML structure as existing comments.
let nom =document.querySelector("#comment-username") ;
let message = document.querySelector("#comment-content") ;
let boutton = document.querySelector("#comment-submit") ;
let liste = document.querySelector("#comments-list") ;
let calendrier = new Date().toLocaleDateString() ; 
let action = (boutton) =>
{
    boutton.preventDefault();

    const lii = document.createElement("li") ;
    const h55 = document.createElement("h5") ; /* crée nos balise dans le html  */
    const h66 = document.createElement("h6") ;
    const pp = document.createElement("p") ; 

    liste.append(lii);
    lii.append(h55,h66,pp)                  /* mètres l'intèrieurs nos élément dans nos élément */
    console.log (liste.innerHTML)

    h55.append(nom.value) ;
    h66.append(calendrier) ;               /* afficher la value de notre élément boutton */
    pp.append(message.value) ;
}
boutton.addEventListener("click", action) ;
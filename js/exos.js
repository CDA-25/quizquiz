/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
const question1 = String("Quelle mer borde la ville de Sébastopol ?")
const solution1 = String("la mer Noire")
let fautes = 0 //compteur de fautes

/* Exo 2 */

function questionReponse(question, reponse)
{
    // alert(question)  Je trouve ça plus intuitif de passer uniquement par le prompt() et passer la variable question dedans plutôt que via un alert()
    output = prompt(question)

    if (!output)
    {
        alert("Oh, tu dois écrire au moins quelque chose tu t'es cru où là ?")
        fautes++
        return;
    }
    if (output == reponse)
    {
        alert("Gagné ! =D")
        return;
    }
    else
    {
        alert("Perdu... =(")
        fautes++
        return;
    }
}

questionReponse(question1, solution1) //Appelle la fonction avec comme arguments les variables définies dans Exo 1



/* Exo 3 */
const question2 = String("Quel est l'âge du capitaine ?")
const solution2 = Number(63)

questionReponse(question2, solution2) //Appelle la fonction pour l'exo 2

if (fautes == 0)
{
    alert("Vous avez terminé le quizz sans faire une seule faute, quel exploit !") // Ca flex severe ici
}

else
{
    alert("Vous avez terminé le quizz ! Vous avez fait " + fautes + " fautes") // Ca flex un peu moins

}



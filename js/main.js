// SalleBook -- Script principal
// Mise en évidence du lien de navigation actif
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const current = window.location.pathname.split("/").pop();
    links.forEach(function(link) {
        const href = link.getAttribute("href");
        if (href === current || (current === "" && href === "index.html")) {
            link.style.color = "#f18f01";
            link.style.fontWeight = "bold";
        }
    });
});

// Affichage d'un message de confirmation à la soumission
function confirmerSoumission(event) {
    event.preventDefault();
    alert("Votre demande de réservation a bien été envoyée !");
    event.target.reset();
}
const email = () => {
    document.getElementById('sendEmailBtn').addEventListener('click', function() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,  // You can also try 465 for SSL
            Username: "youssefhamroui03@gmail.com",
            Password: "B434879A728A8D1B8B9A7074C019D2FD3236",
            To: "youssefhamroui03@gmail.com",
            From: "youssefhamroui03@gmail.com",
            Subject: ,
            Body: "Message du corps de l'email."
        }).then(
            response => alert("Email envoyé avec succès : " + response)
        ).catch(
            error => alert("Erreur lors de l'envoi de l'email : " + error)
        );
    });
};

export default email;

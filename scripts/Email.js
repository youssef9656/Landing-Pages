
    document.getElementById('sendEmailBtn').addEventListener('click', function() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,  // You can also try 465 for SSL
            Username: "youssefhamroui03@gmail.com",
            Password: "04F0F486DF5B6181BE6E6F6B12211AAEE991",
            To: "youssefhamroui03@gmail.com",
            From: "youssefhamroui03@gmail.com",
            Subject: "hfhshj",
            Body: "Message du corps de l'email."
        }).then(
            response => alert("Email envoyé avec succès : " + response)
        ).catch(
            error => alert("Erreur lors de l'envoi de l'email : " + error)
        );
    });
    function email(objectDOnne) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Port: 2525,  // You can also try 465 for SSL
            Username: "youssefhamroui03@gmail.com",
            Password: "04F0F486DF5B6181BE6E6F6B12211AAEE991",
            To: "youssefhamroui03@gmail.com",
            From: "youssefhamroui03@gmail.com",
            Subject:JSON.stringify(objectDOnne),
            Body: "Message du corps de l'email."
        }).then(
            response => alert("Email envoyé avec succès : " + response)
        ).catch(
            error => alert("Erreur lors de l'envoi de l'email : " + error)
        );
    };



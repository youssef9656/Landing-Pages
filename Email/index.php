<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoyer un Email</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h1 class="mt-5">Envoyer un Email avec Gmail</h1>
    <form action="# Change les permissions pour rendre le script exécutable
   chmod +x 'C:\Users\tatay\AppData\Local\JetBrains\PhpStorm2024.2\tmp\intellij-git-askpass-local.sh'# Change les permissions pour rendre le script exécutable
   chmod +x 'C:\Users\tatay\AppData\Local\JetBrains\PhpStorm2024.2\tmp\intellij-git-askpass-local.sh'# Installer git-credential-manager-core
   git config --global credential.helper manager-core.php" method="post">
        <div class="form-group">
            <label for="recipient">Destinataire</label>
            <input type="email" class="form-control" id="recipient" name="recipient" required>
        </div>
        <div class="form-group">
            <label for="subject">Sujet</label>
            <input type="text" class="form-control" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
</div>
</body>
</html>

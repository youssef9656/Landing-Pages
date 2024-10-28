<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Inclure le fichier autoload de Composer
require 'vendor/autoload.php';

// Récupérer les données du formulaire
$recipient = 'cuisinescie@gmail.com';
$subject = $_POST['subject'];
$message = $_POST['message'];


$mail = new PHPMailer(true); // Créer une nouvelle instance PHPMailer

try {
    // Paramètres du serveur SMTP de Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Serveur SMTP de Gmail
    $mail->SMTPAuth = true; // Activer l'authentification SMTP
    $mail->Username = 'cuisinescie@gmail.com'; // Remplace par ton adresse Gmail
    $mail->Password = 'yonv nonc halu epbb'; // Ton mot de passe Gmail ou mot de passe d'application
    $mail->SMTPSecure = 'tls'; // Activer le chiffrement TLS
    $mail->Port = 587; // Port pour TLS

    // Destinataire
    $mail->CharSet = 'UTF-8';

    $mail->setFrom('cuisinescie@gmail.com',  '🌟 Landing Page 🌟');
    $mail->addAddress($recipient); // Ajoute le destinataire

    // Contenu de l'email
    $mail->isHTML(true); // Définir le format de l'email en HTML
    $mail->Subject = $subject; // Sujet de l'email
    $mail->Body = $message; // Corps de l'email en HTML
    $mail->AltBody = strip_tags($message); // Corps en texte brut

    // Envoi de l'email
    $mail->send();
    echo 'Email envoyé avec succès à ' . htmlspecialchars($recipient);
} catch (Exception $e) {
    echo "L'email n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}"; // Affiche l'erreur en cas d'échec
}
?>

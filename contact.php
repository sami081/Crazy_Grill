<?php
if (isset($_POST["lastName"])&&($_POST["firstName"])&&($_POST["tel"])&&($_POST["email"])&&($_POST["date"])&&($_POST["hour"])&&($_POST["number"])){
  $retour = mail("samimakhloufi55@gmail.com", "Réservation", $_POST["lastName"], "Reply-to:" . $_POST["email"]);
  if($retour) {
    echo"<p> email envoyé
  }
}
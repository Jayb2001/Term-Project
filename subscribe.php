<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h2>Thank you for subscribing!</h2>";
        echo "<p>You will receive our latest updates at: <strong>$email</strong></p>";
    } else {
        echo "<h2>Invalid email address. Please try again.</h2>";
    }
} else {
    echo "<h2>Something went wrong. Please try again.</h2>";
}
?>

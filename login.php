<?php
// Dummy credentials — replace with DB lookup in production
$valid_username = "admin";
$valid_password = "password123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if ($username === $valid_username && $password === $valid_password) {
        // Redirect or start session
        echo "<script>alert('Login successful!'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Invalid credentials. Please try again.'); window.history.back();</script>";
    }
}
?>

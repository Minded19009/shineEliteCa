<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data
    $name = $_POST['fullName'] ?? '';
    $phone = $_POST['phoneNumber'] ?? '';
    $vehicle = $_POST['vehicleModel'] ?? '';
    $email = $_POST['email'] ?? '';
    $service = $_POST['serviceType'] ?? '';
    $date = $_POST['date'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Recipient email
    $to = "shineelite404@gmail.com";
    
    // Subject
    $subject = "New Booking Request from Shine Elite Website";
    
    // Email body
    $body = "You have received a new booking request from your website.\n\n";
    $body .= "--------------------------------------------------\n";
    $body .= "Name: " . $name . "\n";
    $body .= "Phone: " . $phone . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Vehicle Model: " . $vehicle . "\n";
    $body .= "Service Type: " . $service . "\n";
    $body .= "Preferred Date: " . $date . "\n";
    $body .= "--------------------------------------------------\n";
    $body .= "Message:\n" . $message . "\n";
    $body .= "--------------------------------------------------\n";
    
    // Headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Success - redirect with success message
        echo "success";
        exit();
    } else {
        // Error - redirect with error message
        echo "error";
        exit();
    }
    
} else {
    // If someone tries to access this file directly
    header("Location: contact.html");
    exit();
}
?>
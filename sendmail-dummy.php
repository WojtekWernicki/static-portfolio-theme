<?php

if($_POST) {
    $name       = $_POST['first-name'];
    $from       = $_POST['mail'];
    $to         = 'your@mail.com'; //DON'T FORGET TO CHANGE YOUR MAIL
    $subject    = $_POST['subject'];
    $content    = $_POST['message'];
    $headers    = "From: " . $from . "\r\n";
    $headers    .= "MIME-Version: 1.0"."\r\n";
    $headers    .= "Content-type: text/html; charset=utf-8"."\r\n";
    
    $message    = "<html>
    <head></head>
    <body>
        You receive message from your contact form. Here are details:<br><br>
        <b>Name</b>: ". $name ."<br>
        <b>Mail</b>: <a href=\"mailto:". $from ."\">". $from ."</a><br>
        <b>Subject</b>: ". $subject ."<br>
        <b>Content</b>:<br>
        ". $content ."
    </body>
    </html>";
    
    mail($to, $subject, $message, $headers);
}

?>
<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);

    $name = @trim(stripslashes($_POST['name']));
    $lastName = @trim(stripslashes($_POST['lastName']));  
    $email = @trim(stripslashes($_POST['email']));
    $message = @trim(stripslashes($_POST['message']));  
    $subject = 'Web Agencia Becom - Mail'; 

    $email_from = $email;
    $email_to = 'cri.bh6@gmail.com';

    $body =  'Subject: ' . $subject . "\n\n" . 'Nombre: ' . $name . "\n\n" . 'Apellidos : ' . $lastName . "\n\n" . 'Email: ' . $email . "\n\n" . 'Message: ' . $message;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    header('Location: autoprob.esy.es');
    exit();
    die; 

    ?>
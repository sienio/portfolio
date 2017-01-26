<?php

function sendEmail($header_text,$message,$subject,$email_adress){

	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	// Additional headers
	$headers .= 'To: '.$email_adress."\r\n";
	$headers .= 'From: sienio.pl <sienskim@gmail.com>' . "\r\n";

	// message
	$message = $header.$message.$footer;

	// Mail it
	mail($email_adress, $subject, $message, $headers);;

	return true;
}

//tytul pojawiajacy sie w naglowku maila
$header_text = "APLIKACJA MADAMSALE DOSTĘPNA NA URZĄDZENIA Z ANDROIDEM!";
//tresc maila
$message = '
<!-- TEKST WIADOMOŚCI -->

		<!-- WRAPPER-->
		<table align="center" border="0" cellpadding="0"
			   cellspacing="0" width="600" style="border:none;
												  width:600;">
			<tr>
				<td style="width: 250px; height: 392px">
					<a href="https://play.google.com/store/apps/details?id=pl.infoapps.madamsale">
						<img src="http://madamsale.com/email/img/androidApp/mail_Android_phone.jpg">
					</a>
				</td>
				<td>
					<p style="font-size: 24px;
							  font-family: Roboto, sans-serif;
							  font-weight: 300;
							  margin-left: auto;
							  margin-right: auto;
							  color: #000;
							  text-align:center;">
						Aplikacja madamSale na urządzenia z Androidem
						<br>
						<br>
						Pobierz ją już teraz!
					</p>
					<a style="display: block; margin-left: auto; margin-right: auto;" href="https://play.google.com/store/apps/details?id=pl.infoapps.madamsale">
						<img  style="display: block; margin-left: auto; margin-right: auto;" src="http://madamsale.com/email/img/androidApp/google_play.png">
					</a>
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<a style="
							  text-decoration: none;
							  font-family: Roboto, sans-serif;
							  font-weight: 300;
							  text-decoration: none;
							  font-size: 16px;
							  padding-bottom: 17px;
							  padding-top: 17px;
							  display: block;
							  color: #fff;
							  background-color: rgba(73, 173, 69, 0.63);
							  width: 200px;
							  margin-top: 30px;
							  text-align: center;" href="https://play.google.com/store/apps/details?id=pl.infoapps.madamsale">
						POBIERZ TERAZ
					</a>
				</td>
			</tr>
			<!-- /ZAWARTOŚĆ WRAPPERA -->
		</table>
		<!-- END OF WRAPPER-->

';
//tytul maila
$subject = "APLIKACJA MADAMSALE NA ANDROIDZIE!";
//adres mailowy
$email_adress = "michal.sienski1987@gmail.com,";

// Tak mozna teraz wysylac maile
sendEmail($header_text,$message,$subject,$email_adress);




?>
    <html>

    <body>
        <p>

            <?php echo "email został wysłany na adres: $email_adress"; ?>
        </p>
    </body>

    </html>

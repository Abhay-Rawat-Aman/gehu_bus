<?php
	require('fpdf/fpdf.php');
	$pdf=new FPDF();
	$pdf->AddPage();
	$pdf->Image('dist\img\logo2.png',50,5,115,23);
	$pdf->SetFont('Times','BU',16);
	//$pdf->Write(20'NOTICE RELATED BUS FEES');
	$pdf->Write(50,'sjdkfllksjd');
	$pdf->Write(70,'sjdkfllksjd');
	$pdf->SetFont('Times','',14);
	//$pdf->Cell(5,'njsdfkl jsdklf jskldf jskdfl jsdf jkl jskldf','0','0','L');
	$pdf->Output();
?>
<?php


if($_SERVER["REQUEST_METHOD"] == "POST" ){
    $transaction1 = $_POST["transaction1"];
    if($transaction1 === "purchase"){
        include("purchase.html");
    }elseif ($transaction1 === "exchange"){
        include("exchange.html");
    }elseif ($transaction1 === "deposit"){
        include("deposit.html");
    } 
}



?>
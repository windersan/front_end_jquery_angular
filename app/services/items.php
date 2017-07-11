<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    include './models/item.php';
    $items = [];

    $items[] = new Item('banana', '5');
    $items[] = new Item('banana', '8');



    if (isset($_GET['id'])) {

    
        $id = intval($_GET['id']);
        
        if (count($items) > $id) {
            
                      http_response_code(200);
            header("Content-Type: application/json");
            echo json_encode($items[$id]);
            exit();

        }
        else {
            
                     include './models/error.php';
    
            http_response_code(404);
            header("Content-Type: application/json");
            $error = new Error1('Item not found', 404);
            echo json_encode($error);
            exit();

        }

    } else {

     
        http_response_code(200);
        header("Content-Type: application/json");
        echo "{\"items\":";
        echo json_encode($items);
        echo "}";
        exit();
    }
} else {

    include './models/error.php';

    http_response_code(400);
    header("Content-Type: application/json");
    $error = new Error1('Bad request for items', 400);
    echo json_encode($error);
    exit();
}

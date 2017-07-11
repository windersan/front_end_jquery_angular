<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    include './models/penguin.php';
    $penguins = [];

    $penguins[] = new Penguin('King penguin', 'Aptenodytes patagonicus');
    $penguins[] = new Penguin('Emperor penguin', 'Aptenodytes forsteri');
    $penguins[] = new Penguin('Adélie penguin', 'Pygoscelis adeliae');

    if (isset($_GET['id'])) {

        // Get the id as an int value... it will be a string on the URL
        $id = intval($_GET['id']);

        if (count($penguins) > $id) {

            // Send single penguin back
                        http_response_code(200);
            header("Content-Type: application/json");
            
            echo json_encode($penguins[$id]);
            exit();

        } else {

                       include './models/error.php';
    
            http_response_code(404);
            header("Content-Type: application/json");
            $error = new Error1('Penguin not found', 404);
            echo json_encode($error);
            exit();

        }
    } else {

        // Return a list of penguins
        http_response_code(200);
        header("Content-Type: application/json");
        echo "{\"penguins\":";
        echo json_encode($penguins);
        echo"}";
        exit();
    }
} else {

    include './models/error.php';

    http_response_code(400);
    header("Content-Type: application/json");
    $error = new Error1('Bad request for penguins', 400);
    echo json_encode($error);
    exit();
}

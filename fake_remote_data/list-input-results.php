<?php

//lecture du fichier json, à remplacer ici par la vrai requete sql
$result = json_decode(file_get_contents('./input-results.json'),true);



header('Content-type: application/json');
exit(json_encode($result));
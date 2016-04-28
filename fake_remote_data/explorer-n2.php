<?php

//lecture du fichier json, à remplacer ici par la vrai requete sql
$result = json_decode(file_get_contents('./lecons.json'),true);




function randomString($length, $chars) {

    $rstr = '';
    for ($i = 0; $i < $length; $i++) {
        $rstr .= $chars[(int) round(((rand(0,100)/100) * (strlen($chars)-1)))];
    }
    return $rstr;
}




//pour chaque domaine
for($i=0; $i<count($result['children']) ; $i++) {
    //pour de 2 à 6 champs
    for($j=0; $j<rand(2,2); $j++){
        $champsName = randomString((round(rand(10,60))), ' abcde,fghijklm,nopqrst uvwxyz :');
        $result['children'][$i]['children'][$j]['name'] = $champsName;
        //pour de 2 à 6 lecons
        for($k=0; $k<rand(2,2); $k++){
            $leconName = randomString((round(rand(10,60))), ' abcde,fghijklm,nopqrst uvwxyz :');
            $result['children'][$i]['children'][$j]['children'][$k]['name'] = $leconName;
            $result['children'][$i]['children'][$j]['children'][$k]['size'] = rand(500,10000);
        }
    }
}

header('Content-type: application/json');
exit(json_encode($result));
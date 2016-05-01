<?php

//lecture du fichier json, à remplacer ici par la vrai requete sql
$result = json_decode(file_get_contents('./lecons.json'),true);

//Construction d'un JSON plus ettofé car manque de données
function randomString($length, $chars) {

    $rstr = '';
    for ($i = 0; $i < $length; $i++) {
        $rstr .= $chars[(int) round(((rand(0,100)/100) * (strlen($chars)-1)))];
    }
    return $rstr;
}

//pour chaque domaine
for($i=0; $i<count($result['children']) ; $i++) {
    //pour de 2 à 6 champs par domaine
    for($j=0; $j<rand(2,6); $j++){
        $champsName = 'CH-'.randomString((round(rand(10,60))), ' abcde,fghijklm,nopqrst uvwxyz :');
        $result['children'][$i]['children'][$j]['name'] = $champsName;
        $result['children'][$i]['children'][$j]['size'] = 1000;//rand(1000,1000);
        //pour de 2 à 26 lecons par champs
        for($k=0; $k<rand(2,26); $k++){
            $leconName = 'LE-'. randomString((round(rand(10,60))), ' abcde,fghijklm,nopqrst uvwxyz :');
            $result['children'][$i]['children'][$j]['children'][$k]['name'] = $leconName;
            $result['children'][$i]['children'][$j]['children'][$k]['size'] = 1000;//rand(500,10000);
        }
    }
}

header('Content-type: application/json');
exit(json_encode($result));
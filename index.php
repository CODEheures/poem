<?php
session_start();

/* attention primeUI bibliotheque corrigée 

    ***** https://github.com/primefaces/primeui/issues/242 *****
    modifie ligne 727 à 729
        change
        if(emptyQuery||itemLabel.indexOf(this.query) === 0) {
            data.push({label:array[i], value: item});
        }
        par
        if(emptyQuery||itemLabel.indexOf(this.query) >= 0) {
            data.push({label:itemLabel, value: item.value});
        }

    ***** https://github.com/primefaces/primeui/issues/216 *****
    ajoute ligne 13130 à 13151
*/

$type = array(
    'front_dashboard' => array(
        'type' => 'front',
        'page' => 'dashboard',
        'menu' => 'Mon tableau de bord',
        'titre' => 'tableau de bord',
        'recommandations' => true
    ),
    'front_explorer' => array(
        'type' => 'front',
        'page' => 'explorer',
        'menu' => 'Explorateur des leçons',
        'titre' => 'Explorateur des leçons',
        'recommandations' => false
    ),
    'front_profil' => array(
        'type' => 'front',
        'page' => 'profil',
        'menu' => 'Mon profil',
        'titre' => 'mon profil',
        'recommandations' => false
    ),
    'front_lesson' => array(
        'type' => 'front',
        'page' => 'lesson',
        'menu' => 'lesson',
        'titre' => 'leçon',
        'recommandations' => false
    ),
    'front_about' => array(
        'type' => 'front',
        'page' => 'about',
        'menu' => 'about',
        'titre' => 'à propos de poem',
        'recommandations' => false
    ),
    'front_legal' => array(
        'type' => 'front',
        'page' => 'legal',
        'menu' => 'legal',
        'titre' => 'Mentions légales',
        'recommandations' => false
    )
);

if(isset($_GET['want']) && key_exists($_GET['want'],$type)){
    $_SESSION['type']=$type[$_GET['want']]['type'];
    $_SESSION['page']=$type[$_GET['want']]['page'];
    $_SESSION['menu']=$type[$_GET['want']]['menu'];
    $_SESSION['titre']=$type[$_GET['want']]['titre'];
    $_SESSION['recommandations']=$type[$_GET['want']]['recommandations'];
    //pour les 2 modes possibles de l'explorateur 'trackball' ou 'attractive'
    if(isset($_GET['explorermode']) && $_GET['explorermode'] == 'attractive') {
        $_SESSION['explorermode'] = 'attractive';
    } else {
        $_SESSION['explorermode'] = 'trackball';
    }
    
} else {
    $_SESSION['type']=$type['front_dashboard']['type'];
    $_SESSION['page']=$type['front_dashboard']['page'];
    $_SESSION['menu']=$type['front_dashboard']['menu'];
    $_SESSION['titre']=$type['front_dashboard']['titre'];
    $_SESSION['recommandations']=$type['front_dashboard']['recommandations'];
}


include('./includes/'.$_SESSION['type'].'/layout.php');
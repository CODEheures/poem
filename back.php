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
    'back_dashboard' => array(
        'type' => 'back',
        'page' => 'dashboard',
        'menu' => 'tableau de bord',
        'titre' => 'tableau de bord'
    ),

    'back_lecons_ajout' => array(
        'type' => 'back',
        'page' => 'lecons_ajout',
        'menu' => 'créer une leçon',
        'titre' => 'créer une leçon'
    ),

    'back_lecons_modif' => array(
        'type' => 'back',
        'page' => 'lecons_modif',
        'menu' => 'modifier une leçon',
        'titre' => 'modifier une leçon'
    ),

    'back_sessions' => array(
        'type' => 'back',
        'page' => 'sessions_list',
        'menu' => 'sessions privées',
        'titre' => 'liste des sessions'
    ),

    'back_sessions_ajout' => array(
        'type' => 'back',
        'page' => 'sessions_ajout',
        'menu' => 'créer une session',
        'titre' => 'créer une session'
    ),

    'back_sessions_modif' => array(
        'type' => 'back',
        'page' => 'sessions_modif',
        'menu' => 'modifier une session',
        'titre' => 'modifier une session'
    ),

    'back_explorer' => array(
        'type' => 'back',
        'page' => 'explorer',
        'menu' => 'explorer les lecons',
        'titre' => 'explorateur des leçons'
    ),

    'back_explorer2' => array(
        'type' => 'back',
        'page' => 'explorer2',
        'menu' => 'explorer les lecons 2',
        'titre' => 'explorateur des leçons 2'
    ),

    'back_resultats' => array(
        'type' => 'back',
        'page' => 'resultats',
        'menu' => 'voir les résultats',
        'titre' => 'résultats'
    ),
);

if(isset($_GET['want']) && key_exists($_GET['want'],$type)){
    $_SESSION['type']=$type[$_GET['want']]['type'];
    $_SESSION['page']=$type[$_GET['want']]['page'];
    $_SESSION['menu']=$type[$_GET['want']]['menu'];
    $_SESSION['titre']=$type[$_GET['want']]['titre'];
    //pour les 2 modes possibles de l'explorateur 'trackball' ou 'attractive'
    if(isset($_GET['explorermode']) && $_GET['explorermode'] == 'attractive') {
        $_SESSION['explorermode'] = 'attractive';
    } else {
        $_SESSION['explorermode'] = 'trackball';
    }
    
} else {
    $_SESSION['type']=$type['back_dashboard']['type'];
    $_SESSION['page']=$type['back_dashboard']['page'];
    $_SESSION['menu']=$type['back_dashboard']['menu'];
    $_SESSION['titre']=$type['back_dashboard']['titre'];
}


include('./includes/'.$_SESSION['type'].'/layout.php');
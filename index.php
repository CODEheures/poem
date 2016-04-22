<?php
session_start();

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
        'titre' => 'explorateur'
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
    
} else {
    $_SESSION['type']=$type['back_dashboard']['type'];
    $_SESSION['page']=$type['back_dashboard']['page'];
    $_SESSION['menu']=$type['back_dashboard']['menu'];
    $_SESSION['titre']=$type['back_dashboard']['titre'];
}


include('./includes/'.$_SESSION['type'].'/layout.php');
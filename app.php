<?php

define('HIPSUM_API', 'http://hipsum.co/api/');

function import($type) {
    if (empty($type)) {
        $type = 'hipster-latin';
    }
    $params = [
        'type' => $type,
        'paras' => 20,
        'start-with-lorem' => $_GET['start']
    ];

    $content = file_get_contents( HIPSUM_API . '?' . http_build_query($params));

    return implode('<br><br>', json_decode( $content));
}


function reverse($text) {
    $words = [];
    foreach (explode('<br><br>', $text) as $p) {
        foreach (explode(' ', $p) as $s) {
            $words[] = implode('', array_reverse(str_split($s)));
        }
        $words[] = '<br><br>';
    }
    return implode(' ', $words);
}

function wordShuffle($text) {
    $words = [];
    foreach(explode('<br><br>', $text) as $p) {
        $words[] = str_replace(' ',  '', $p);
        $words[] = '<br><br>';
    }
    return implode('', $words);
}


if (!isset($_GET['action'])) {
    die('No Action Specified');
}

switch($_GET['action']) {
case 'import':
    $type = $_GET['type'];
    die(import($type));
    break;
case 'reverse':
    die(reverse($_POST['text']));
    break;
case 'wordShuffle':
    die(wordShuffle($_POST['text']);
    break;
}

// EOF

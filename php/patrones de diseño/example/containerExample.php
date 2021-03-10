<?php

namespace archive;

use archive\container\Container;
use archive\container\Logger;
use archive\container\SessionStorage;
use archive\container\User;

require '../vendor/autoload.php';

try{
    $container = new Container();

    $user = $container->get(User::class);
    $user->setLanguage('es');
    $user->getLanguage();

    //Sin la clase reflection
    /*$container->set(User::class, function (Container $c){
        return new User($c->get(SessionStorage::class));
    });

    $container->set(SessionStorage::class, function (Container $c){
        return new SessionStorage($c->get(Logger::class));
    });

    $container->set(Logger::class, function (Container $c){
        return new Logger();

    $user = $container->getWithoutReflection(User::class);
    $user->setLanguage('es');
    $user->getLanguage();
    });*/

}catch (\Exception $e) {
    echo $e->getMessage();
}





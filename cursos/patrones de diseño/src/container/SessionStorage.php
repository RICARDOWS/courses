<?php

namespace archive\container;

class SessionStorage
{
    protected $logger;

    public function __construct(Logger $loger)
    {
        session_start();
        $this->logger = $loger;
    }

    public function set($key, $value)
    {
        $this->logger->log(
            "Setting [$key] to [$value]"
        );

        $_SESSION[$key] = $value;
    }

    public function get($key){
        return $_SESSION[$key];
    }
}

<?php
namespace archive\container;

class Logger
{
    public function log($message)
    {
        echo "Loggin $message to the database..."."\n";
    }
}
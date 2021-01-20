<?php

class CustCommand implements Command {
    public function onCommand($name, $args) {
        if ($name != 'addCustomer')
            return false;
        echo("This is CustomerCommand handling 'addCustomer'\n");
        return true;
    }
}

<?php
class MailCommand implements Command {
    public function onCommand($name, $args) {
        if ($name != 'mail')
            return false;
        echo("This is MailCommand handling 'mail'\n");
        return true;
    }
}

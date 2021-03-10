<?php

require_once('CommandInterface.php');
require_once('CommandChain.php');
require_once('CustCommand.php');
require_once('MailCommand.php');

$cc = new CommandChain();
$cc->addCommand( new CustCommand());
$cc->addCommand( new MailCommand());

$cc->runCommand('addCustomer', null);
$cc->runCommand('mail', null);

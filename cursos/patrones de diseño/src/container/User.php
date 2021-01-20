<?php
namespace archive\container;

class User
{
    protected $storage;

    function __construct(SessionStorage $storage)
    {
        $this->storage = $storage;
    }

    public function setLanguage($language)
    {
        $this->storage->set('language',$language);
    }

    function getLanguage()
    {
        return $this->storage->get('language');
    }
}
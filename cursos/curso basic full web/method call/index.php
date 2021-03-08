<?php

/**
 * Class Persona
 * Metodo call para que devuelva lo que quieres cuando el metodo llamado no existe en la clase
 * Funcionalidad el archivo: Comprobar si la propiedad existe con el prefijo get en la clase y devolverla
 */
Class Persona{
    protected $nombre;
    protected $edad;
    protected $ciudad;

    public function __construct($nombre, $edad, $ciudad)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->ciudad = $ciudad;
    }

    public function  __call($name, $arguments)
    {
        $prefix_metodo = substr($name,0,3);

        if($prefix_metodo == 'get'){
            $nombre_metodo = substr(strtolower($name),3);

            if(!isset($this->$nombre_metodo)){
                return 'El metodo no existe';
            }

            return $this->$nombre_metodo;
        }else{
            return 'El metodo no existe';
        }
    }
}

$persona = new Persona('Juan', 23,'Mexico');

echo $persona->getNombre();
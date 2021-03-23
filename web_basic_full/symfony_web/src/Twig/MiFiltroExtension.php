<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class MiFiltroExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('fl_multiplicar', [$this, 'multiplicar']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('fn_multiplicar', [$this, 'multiplicar']),
        ];
    }

    public function multiplicar($num)
    {
        $tabla = "<h1>Tabla del $num</h1>";
        for($i = 1; $i <=10; $i++){
            $tabla .= "$i x $num = ".($i*$num)."<br>";
        }

        return $tabla;
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/register.html.twig', [
            'controller_name' => 'HomeController',
            'variable' => 'Varible desde el controlador',
        ]);
    }

    public function animales($nombre): Response
    {
        $animales = ['perro', 'gato', 'rata', 'paloma'];
        $aves = ['nombre' => 'perico', 'edad' => '12', 'color' => 'negro'];

        return $this->render('home/animales.html.twig', [
            'title' => 'Bienvenido a Animales Page',
            'nombre' => $nombre,
            'animales' => $animales,
            'aves' => $aves
        ]);
    }

    public function redirigir(): Response
    {
        return $this->redirect('https://www.google.com');
        return $this->redirectToRoute('animales', [
            'nombre' => 'Juan'
        ]);
    }
}

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
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'variable' => 'Hola mundo',
        ]);
    }

    public function animales($nombre): Response
    {
        return $this->render('home/animales.html.twig', [
            'title' => 'Bienvenido a Animales Page',
            'nombre' => $nombre
        ]);
    }

    public function redirigir(): Response
    {
        return $this->redirect('https://www.google.com');
        return $this->redirectToRoute('animales',[
            'nombre' => 'Juan'
        ]);
    }
}

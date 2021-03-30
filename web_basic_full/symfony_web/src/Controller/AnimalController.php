<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Animal;

class AnimalController extends AbstractController
{
    /**
     * @Route("/animal", name="animal")
     */
    public function index(): Response
    {
        $entityRepo = $this->getDoctrine()->getRepository(Animal::class);

        $animales = $entityRepo->findAll();

        return $this->render('animal/register.html.twig', [
            'controller_name' => 'AnimalController',
            'animales' => $animales
        ]);
    }

    public function store(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();

        $animal = new Animal();
        $animal->setNombre('Tortuga');
        $animal->setEspecie('Reptil');
        $animal->setEdad('20');

        $entityManager->persist($animal);
        $entityManager->flush();

        return new Response('El animal guardado tiene el id: '.$animal->getId());
    }

    public function detail(Animal $animal):Response
    {
//        $entityRepo = $this->getDoctrine()->getRepository(Animal::class);
//
//        $animal = $entityRepo->find($id);

        if($animal === null){
            return new Response('No se encontro animal');
        }

        return new Response('El animal es: '.$animal->getNombre().' de edad: '.$animal->getEdad());
    }
}

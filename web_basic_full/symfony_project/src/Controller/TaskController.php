<?php

namespace App\Controller;

use App\Entity\TaskEntity;
use App\Entity\UserEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends AbstractController
{
    public function index(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $taskRepository = $this->getDoctrine()->getRepository(TaskEntity::class);

        $tasks = $taskRepository->findAll();


        return $this->render('task/index.html.twig', [
            'controller_name' => 'TaskController',
        ]);
    }
}

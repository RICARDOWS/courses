<?php

namespace App\Controller;

use App\Entity\TaskEntity;
use App\Form\TaskType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\User\UserInterface;

class TaskController extends AbstractController
{
    public function index(): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $taskRepository = $this->getDoctrine()->getRepository(TaskEntity::class);

        $tasks = $taskRepository->findBy([],['id'=>'DESC']);


        return $this->render('task/index.html.twig', [
            'tasks' => $tasks,
        ]);
    }

    public function detail(TaskEntity $task): Response
    {
        if(!$task){
            return $this->redirectToRoute('task_view');
        }

        return $this->render('task/detail.html.twig',[
            'task' => $task
        ]);

    }

    public function create(Request $request, UserInterface $user){
        $task = new TaskEntity();
        $form = $this->createForm(TaskType::class,$task);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $task->setCreatedAt(new \DateTime('now'));
            $task->setUser($user);

            $em = $this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();

            return $this->redirect($this->generateUrl('task_detail',['id'=>$task->getId()]));
        }

        return $this->render('task/creation.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

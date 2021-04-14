<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\UserEntity;
use App\Form\RegisterType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class UserController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    public function register(Request $request,UserPasswordEncoderInterface $encoder):Response
    {
        $user = new UserEntity();
        $form = $this->createForm(RegisterType::class,$user);

        $form->handleRequest($request);

        if($form->isSubmitted()){
            $user->setRole('ROLE_USER');

            $encoded = $encoder->encodePassword($user,$user->getPassword());
            $user->setPassword($encoded);
            $user->setCreatedAt(new \DateTime('now'));

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('task_view');
        }

        return $this->render('user/register.html.twig', [
            'controller_name' => 'UserController',
            'form' => $form->createView(),
        ]);
    }

    public function login(AuthenticationUtils $auth){
        $error = $auth->getLastAuthenticationError();

        $lastUsername = $auth->getLastUsername();

        return $this->render('user/login.html.twig',[
            'error' => $error,
            'lastUsername' => $lastUsername]);
    }
}

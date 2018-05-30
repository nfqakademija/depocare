<?php

namespace App\Controller;

use App\Form\RegistrationType;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use FOS\UserBundle\Event\FormEvent;
use FOS\UserBundle\Event\GetResponseUserEvent;
use FOS\UserBundle\FOSUserEvents;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @RouteResource("registration", pluralize=false)
 */
class RestRegistrationController extends FOSRestController implements ClassResourceInterface
{
    /**
     * @Annotations\Post("api/register")
     */
    public function registerAction(Request $request)
    {

        /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
        $userManager = $this->get('app_fos_user.user_manager');
        /** @var $dispatcher \Symfony\Component\EventDispatcher\EventDispatcherInterface */
        $dispatcher = $this->get('event_dispatcher');

        $user = $userManager->createUser();
        $user->setEnabled(true);

        $event = new GetResponseUserEvent($user, $request);
        $dispatcher->dispatch(FOSUserEvents::REGISTRATION_INITIALIZE, $event);

        if (null !== $event->getResponse()) {
            return $event->getResponse();
        }

        $form = $this->createForm(RegistrationType::class, $user, [
            'csrf_protection' => false
        ]);

        $form->setData($user);
        $form->submit($request->request->all());

        if (!$form->isValid()) {
            $event = new FormEvent($form, $request);

            $dispatcher->dispatch(FOSUserEvents::REGISTRATION_FAILURE, $event);

            if (null !== $response = $event->getResponse()) {
                return $response;
            }

            return $form;
        }

        $user->setConfirmationToken(null);
        $user->setEnabled(true);
        $event = new GetResponseUserEvent($user, $request);
        $dispatcher->dispatch(FOSUserEvents::REGISTRATION_CONFIRM, $event);
        $userManager->updateUser($user);
        $dispatcher->dispatch(FOSUserEvents::REGISTRATION_CONFIRMED,
            new FilterUserResponseEvent($user, $request, new Response()));

        $response = new JsonResponse(
            [
                'msg' => $this->get('translator')->trans('registration.flash.user_created', [], 'FOSUserBundle')
            ],
            JsonResponse::HTTP_CREATED
        );

        $dispatcher->dispatch(
            FOSUserEvents::REGISTRATION_COMPLETED,
            new FilterUserResponseEvent($user, $request, $response)
        );

        return $response;
    }
}

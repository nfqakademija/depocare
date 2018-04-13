<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.4.13
 * Time: 10.43
 */

namespace App\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\RegistrationFormType;


class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('lastname');
    }

    public function getParent()
    {
        return RegistrationFormType::class;
    }

    public function getName()
    {
        return 'app_user_registration';
    }
}

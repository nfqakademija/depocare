<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.3
 * Time: 23.15
 */
namespace App\Traits;

use FOS\RestBundle\View\View;

trait ApiTraits
{
    public function success($data)
    {
        $view = View::create(
                $data
        );        $context = $view->getContext();
        $context->setSerializeNull(true);
        $view->setContext($context);
        return $view;
    }
}

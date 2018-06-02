<?php


class ProjectsCest
{
    public function _before(AcceptanceTester $I)
    {
    }

    public function _after(AcceptanceTester $I)
    {
    }

    /**
    * @param AcceptanceTester $I user
    * @throws Exception
    */
    public function checkIfProjectsRender(AcceptanceTester $I)
    {
        $I->am("Looking for projects");
        $I->amOnPage('/');
        $I->canSee('Projektai');
        $I->click('Projektai');
        $I->waitForElement('#singleProduct');
        $I->amRedirectedTo('/projektai');
        $I->seeElement('.projects-view-title-by');
    }
}

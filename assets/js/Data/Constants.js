/*
Text fields max charts count
 */
export const MAX_CHARS_TITLE = 60;
export const MAX_CHARS_SHORT_BLURB = 135;
/*
Notifications text
 */
export const NOTIFICATION_TIME = 4000;
export const NOTIFICATION_NOT_LOGIN_TITLE = "Prisijunkite!";
export const NOTIFICATION_NOT_LOGIN_TEXT = "Jūs neprisijungęs, prašome prisijungti.";
export const NOTIFICATION_500_TITLE = "Serverio, klaida";
export const NOTIFICATION_500_TEXT = "Įvyko serverio klaida, prašome bandyti dar kartą.";
export const NOTIFICATION_PROJECT_START_TTITLE = "Projektas pradėtas!";
export const NOTIFICATION_PROJECT_START_TEXT = "Gero rašymo!";
export const NOTIFICATION_FAILED_TO_SAVE_PROJECT = "Nepavyko išsaugoti projekto";
export const NOTIFICATION_PROJECT_UPDATE_SUCCESS_TEXT = "Projektas išsaugotas";
export const NOTIFICATION_PROJECT_UPDATE_SUCCESS_TITLE = "Projektas sėkmingai išsaugotas";
/*
FE routes
 */
export const LOGIN_PAGE = '/prisijungti';
export const HOME_PAGE = '/';
/*
Api routes
 */
export const API_URL = 'http://localhost:8000/api/';
export const URL_GET_PROJECTS = API_URL + 'projects';
export const URL_GET_PROJECT = API_URL + 'project/';
export const URL_GET_CATEGORIES = API_URL + 'categories';
export const URL_UPDATE_PROJECT = API_URL + 'updateProject/';
export const URL_CREATE_NEW_PROJECT = API_URL +'newProject';
export const URL_GET_PROJECT_EDIT = API_URL + 'projectEdit/';
export const URL_GET_USERS_PROJECT_LIST = API_URL + 'userProjects';
export const URL_GET_USER = API_URL + 'profile';
export const URL_REGISTER = API_URL + 'register';
export const URL_LOGIN = API_URL + 'login';
export const URL_PROJECT_FILE_UPLOAD = API_URL + 'uploadProjectFile';
export const URL_AVATAR_UPLOAD = API_URL + 'uploadAvatar';
export const URL_NEW_TRANSACTION = API_URL + 'newtransaction';

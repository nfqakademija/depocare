import {URL_GET_PROJECT_EDIT,URL_CREATE_NEW_PROJECT} from "../../Data/Constants";
export const SET_PROJECT_CREATE = "SET_PROJECT_CREATE";
export const TITLE_CHANGE = "TITLE_CHANGE";
export const END_DATE_CHANGE = "END_DATE_CHANGE";
export const CHARITY_FUND_CHANGE = "CHARITY_FUND_CHANGE";
export const DESCRIPTION_CHANGE = "DESCRIPTION_CHANGE";
export const GOAL_CHANGE = "GOAL_CHANGE";
export const CATEGORY_CHANGE = "CATEGORY_CHANGE";
export const CITY_CHANGE = "CITY_CHANGE";
export const YOUTUBE_CHANGE = "YOUTUBE_CHANGE";
export const LONG_DESCRIPTION_CHANGE = "LONG_DESCRIPTION_CHANGE";
export const IMAGE_CHANGE = "IMAGE_CHANGE";
export const FIRST_NAME_CHANGE = "FIRST_NAME_CHANGE";
export const LAST_NAME_CHANGE = "LAST_NAME_CHANGE";
export const BIOGRAPHY_CHANGE = "BIOGRAPHY_CHANGE";
export const PROFILE_IMAGE_CHANGE = "PROFILE_IMAGE_CHANGE";
export const ORGANIZATION_NAME_CHANGE = "ORGANIZATION_NAME_CHANGE";
export const ORGANIZATION_IBAN_CHANGE = "ORGANIZATION_IBAN_CHANGE";
export const ORGANIZATION_STREET_ADDRESS_CHANGE = "ORGANIZATION_STREET_ADDRESS_CHANGE";
export const ORGANIZATION_PHONE_NUMBER_CHANGE = "ORGANIZATION_PHONE_NUMBER_CHANGE";
export const ORGANIZATION_EMAIL_ADDRESS_CHANGE = "ORGANIZATION_EMAIL_ADDRESS_CHANGE";
export const ORGANIZATION_CODE_CHANGE = "ORGANIZATION_CODE_CHANGE";
export const ORGANIZATION_WEB_ADDRESS_CHANGE = "ORGANIZATION_WEB_ADDRESS_CHANGE";
export const ORGANIZATION_OWNER_FIRST_NAME_CHANGE = "ORGANIZATION_OWNER_FIRST_NAME_CHANGE";
export const ORGANIZATION_OWNER_LAST_NAME_CHANGE = "ORGANIZATION_OWNER_LAST_NAME_CHANGE";
export const ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE = "ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE";
export const ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE = "ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE";
export const PROJECT_CREATE_SAVE_CHANGE = "PROJECT_CREATE_SAVE_CHANGE";
export const BANK_CHANGE = "BANK_CHANGE";
export const SUCCESS = "SUCCESS_PROJECT_CREATE";
export const ERROR = "ERROR_PROJECT_CREATE";

export const projectCreateInputChange = (object) => {
    switch (object.type) {
        case SET_PROJECT_CREATE:
            return (dispatch) => {
                return fetchProject(object.id).then(([response, json]) =>{
                    switch (response.status) {
                        case 200:
                            return dispatch({
                                type: SET_PROJECT_CREATE,
                                status: response.status,
                                payload: json
                            });
                        default:
                            return dispatch({type: ERROR, status: response.status});
                    }
                })
            };
        case TITLE_CHANGE:
            return {
                type: object.type,
                payload: {
                    title: object.title
                }
            };
        case PROJECT_CREATE_SAVE_CHANGE:
            return {
                type: object.type,
                save: object.save
            };
        case END_DATE_CHANGE:
            return {
                type: object.type,
                payload: {
                    end_date: object.end_date
                }
            };
        case CHARITY_FUND_CHANGE:
            return {
                type: object.type,
                payload: {
                    charity_fund: object.charity_fund
                }
            };
        case DESCRIPTION_CHANGE:
            return {
                type: object.type,
                payload: {
                    description: object.description
                }
            };
        case GOAL_CHANGE:
            return {
                type: object.type,
                payload: {
                    goal: object.goal
                }
            };
        case CATEGORY_CHANGE:
            return {
                type: object.type,
                payload: {
                    category: object.category
                }
            };
        case CITY_CHANGE:
            return {
                type: object.type,
                payload: {
                    city: object.city
                }
            };
        case YOUTUBE_CHANGE:
            return {
                type: object.type,
                payload: {
                    youtube: object.youtube
                }
            };
        case LONG_DESCRIPTION_CHANGE:
            return {
                type: object.type,
                payload: {
                    long_description: object.long_description
                }
            };
        case IMAGE_CHANGE:
            return {
                type: object.type,
                payload: {
                    image: object.image
                }
            };
        case PROFILE_IMAGE_CHANGE:
            return {
                type: object.type,
                payload: {
                    profile_image: object.profile_image
                }
            };
        case FIRST_NAME_CHANGE:
            return {
                type: object.type,
                payload: {
                    first_name: object.first_name
                }
            };
        case LAST_NAME_CHANGE:
            return {
                type: object.type,
                payload: {
                    last_name: object.last_name
                }
            };
        case BIOGRAPHY_CHANGE:
            return {
                type: object.type,
                payload: {
                    biography: object.biography
                }
            };
        case ORGANIZATION_NAME_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_name: object.organization_name
                }
            };
        case ORGANIZATION_IBAN_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_iban: object.organization_iban
                }
            };
        case ORGANIZATION_STREET_ADDRESS_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_street_address: object.organization_street_address
                }
            };
        case ORGANIZATION_PHONE_NUMBER_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_phone_number: object.organization_phone_number
                }
            };
        case ORGANIZATION_EMAIL_ADDRESS_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_email_address: object.organization_email_address
                }
            };
        case ORGANIZATION_CODE_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_code: object.organization_code
                }
            };
        case ORGANIZATION_WEB_ADDRESS_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_web_address: object.organization_web_address
                }
            };
        case ORGANIZATION_OWNER_FIRST_NAME_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_owner_first_name: object.organization_owner_first_name
                }
            };
        case ORGANIZATION_OWNER_LAST_NAME_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_owner_last_name: object.organization_owner_last_name
                }
            };
        case ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_owner_phone_number: object.organization_owner_phone_number
                }
            };
        case ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE:
            return {
                type: object.type,
                payload: {
                    organization_owner_email_address: object.organization_owner_email_address
                }
            };
        case BANK_CHANGE:
            return {
                type: object.type,
                payload: {
                    bank: object.bank
                }
            };
        default:
            return {}
    }
};
export const createEmptyProject = () => {
    return (dispatch) => {
        return fetchCreateEmptyProject().then(([response, json]) =>{
            switch (response.status) {
                case 200:
                    return dispatch({type: SUCCESS, id: json.id, status: response.status});
                default:
                    return dispatch({type: ERROR, status: response.status});
            }
        });
    };
};

function fetchProject(id) {
    return fetch(URL_GET_PROJECT_EDIT+id, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        })
    }).then( response => Promise.all([response, response.json()]));
}
function fetchCreateEmptyProject() {
    return fetch(URL_CREATE_NEW_PROJECT, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem("token")
        })
    }).then( response => Promise.all([response, response.json()]));
}


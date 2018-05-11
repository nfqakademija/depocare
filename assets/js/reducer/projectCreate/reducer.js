import _ from 'lodash';
import {SUCCESS,ERROR, PROJECT_CREATE_SAVE_CHANGE} from "./actions";
import {SET_PROJECT_CREATE,BIOGRAPHY_CHANGE,CATEGORY_CHANGE,CHARITY_FUND_CHANGE,END_DATE_CHANGE,CITY_CHANGE,DESCRIPTION_CHANGE,FIRST_NAME_CHANGE,GOAL_CHANGE,IMAGE_CHANGE,LAST_NAME_CHANGE,LONG_DESCRIPTION_CHANGE,PROFILE_IMAGE_CHANGE,TITLE_CHANGE,YOUTUBE_CHANGE} from "./actions";
import {ORGANIZATION_IBAN_CHANGE, ORGANIZATION_EMAIL_ADDRESS_CHANGE,BANK_CHANGE,ORGANIZATION_WEB_ADDRESS_CHANGE,ORGANIZATION_NAME_CHANGE,ORGANIZATION_CODE_CHANGE,ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE,ORGANIZATION_OWNER_FIRST_NAME_CHANGE,ORGANIZATION_OWNER_LAST_NAME_CHANGE,ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE,ORGANIZATION_PHONE_NUMBER_CHANGE,ORGANIZATION_STREET_ADDRESS_CHANGE} from "./actions";

const initialState = {
    id: null, status: '', save: false,
    title: '', charity_fund: '', description: '', goal: 0, category: 0, city: 1, image: '', end_date: '', flag_create: '',
    youtube: '', long_description: '',
    first_name: '', last_name: '', biography: '', profile_image: '',
    organization_name: '', organization_street_address: '', organization_phone_number: '', organization_email_address: '', organization_code: '', organization_web_address: '', organization_iban: '',
    organization_owner_first_name: '', organization_owner_last_name: '', organization_owner_phone_number: '', organization_owner_email_address: '', bank: '', organization_id: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return _.assign({}, state, {
                id: action.id,
                status: action.status,
                save: false
            });
        case ERROR:
            return _.assign({}, state, {
                status: action.status
            });
        case SET_PROJECT_CREATE:
            return _.assign({}, state, {
                end_date: action.payload.end_date,
                status: action.status,
                id: action.payload.id,
                organization_id: action.payload.organization.id,
                title: action.payload.title,
                charity_fund: action.payload.charity_fund,
                description: action.payload.description,
                goal: action.payload.goal,
                category: action.payload.category.id,
                city: action.payload.city.id,
                youtube: action.payload.youtube,
                image: action.payload.image,
                long_description: action.payload.long_description,
                first_name: action.payload.user_id.firstname,
                last_name: action.payload.user_id.lastname,
                biography: action.payload.user_id.biography,
                profile_image: action.payload.user_id.image,
                organization_name: action.payload.organization.organization_name,
                organization_iban: action.payload.organization.organization_iban,
                organization_street_address: action.payload.organization.organization_street_address,
                organization_phone_number: action.payload.organization.organization_phone_number,
                organization_email_address: action.payload.organization.organization_email_address,
                organization_code: action.payload.organization.organization_code,
                organization_web_address: action.payload.organization.organization_web_address,
                organization_owner_first_name: action.payload.organization.organization_owner_first_name,
                organization_owner_last_name: action.payload.organization.organization_owner_last_name,
                organization_owner_phone_number: action.payload.organization.organization_owner_phone_number,
                organization_owner_email_address: action.payload.organization.organization_owner_email_address,
                bank: action.payload.bank.id,
                flag_create: action.payload.flag_create,
                save: false
            });
        case PROJECT_CREATE_SAVE_CHANGE:
            return _.assign({}, state, {
                save: action.save
            });
        case TITLE_CHANGE:
            return _.assign({}, state, {
                title: action.payload.title,
                save: true
            });
        case END_DATE_CHANGE:
            return _.assign({}, state, {
                end_date: action.payload.end_date,
                save: true
            });
        case CHARITY_FUND_CHANGE:
            return _.assign({}, state, {
                charity_fund: action.payload.charity_fund,
                save: true
            });
        case DESCRIPTION_CHANGE:
            return _.assign({}, state, {
                description: action.payload.description,
                save: true
            });
        case GOAL_CHANGE:
            return _.assign({}, state, {
                goal: action.payload.goal,
                save: true
            });
        case CATEGORY_CHANGE:
            return _.assign({}, state, {
                category: action.payload.category,
                save: true
            });
        case CITY_CHANGE:
            return _.assign({}, state, {
                city: action.payload.city,
                save: true
            });
        case YOUTUBE_CHANGE:
            return _.assign({}, state, {
                youtube: action.payload.youtube,
                save: true
            });
        case LONG_DESCRIPTION_CHANGE:
            return _.assign({}, state, {
                long_description: action.payload.long_description,
                save: true
            });
        case IMAGE_CHANGE:
            return _.assign({}, state, {
                image: action.payload.image,
                save: true
            });
        case FIRST_NAME_CHANGE:
            return _.assign({}, state, {
                first_name: action.payload.first_name,
                save: true
            });
        case LAST_NAME_CHANGE:
            return _.assign({}, state, {
                last_name: action.payload.last_name,
                save: true
            });
        case BIOGRAPHY_CHANGE:
            return _.assign({}, state, {
                biography: action.payload.biography,
                save: true
            });
        case PROFILE_IMAGE_CHANGE:
            return _.assign({}, state, {
                profile_image: action.payload.profile_image,
                save: true
            });
        case ORGANIZATION_NAME_CHANGE:
            return _.assign({}, state, {
                organization_name: action.payload.organization_name,
                save: true
            });
        case ORGANIZATION_IBAN_CHANGE:
            return _.assign({}, state, {
                organization_iban: action.payload.organization_iban,
                save: true
            });
        case ORGANIZATION_STREET_ADDRESS_CHANGE:
            return _.assign({}, state, {
                organization_street_address: action.payload.organization_street_address,
                save: true
            });
        case ORGANIZATION_PHONE_NUMBER_CHANGE:
            return _.assign({}, state, {
                organization_phone_number: action.payload.organization_phone_number,
                save: true
            });
        case ORGANIZATION_EMAIL_ADDRESS_CHANGE:
            return _.assign({}, state, {
                organization_email_address: action.payload.organization_email_address,
                save: true
            });
        case ORGANIZATION_CODE_CHANGE:
            return _.assign({}, state, {
                organization_code: action.payload.organization_code,
                save: true
            });
        case ORGANIZATION_WEB_ADDRESS_CHANGE:
            return _.assign({}, state, {
                organization_web_address: action.payload.organization_web_address,
                save: true
            });
        case ORGANIZATION_OWNER_FIRST_NAME_CHANGE:
            return _.assign({}, state, {
                organization_owner_first_name: action.payload.organization_owner_first_name,
                save: true
            });
        case ORGANIZATION_OWNER_LAST_NAME_CHANGE:
            return _.assign({}, state, {
                organization_owner_last_name: action.payload.organization_owner_last_name,
                save: true
            });
        case ORGANIZATION_OWNER_PHONE_NUMBER_CHANGE:
            return _.assign({}, state, {
                organization_owner_phone_number: action.payload.organization_owner_phone_number,
                save: true
            });
        case ORGANIZATION_OWNER_EMAIL_ADDRESS_CHANGE:
            return _.assign({}, state, {
                organization_owner_email_address: action.payload.organization_owner_email_address,
                save: true
            });
        case BANK_CHANGE:
            return _.assign({}, state, {
                bank: action.payload.bank,
                save: true
            });
        default:
            return state
    }
}
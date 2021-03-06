enum RequestMethod {
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
  PUT = 'PUT',
}
export { RequestMethod };

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
const LANGUAGE_WITH_SAGA_SUCCESS = 'LANGUAGE_WITH_SAGA_SUCCESS';

const SHOW_LOADING_WITH_SAGA = 'SHOW_LOADING_WITH_SAGA';
const HIDE_LOADING_WITH_SAGA = 'HIDE_LOADING_WITH_SAGA';
const NAVIGATION_ROOT_WITH_SAGA = 'NAVIGATION_ROOT_WITH_SAGA';
const NAVIGATION_ROOT_SUCCESS = 'NAVIGATION_ROOT_SUCCESS';
const SELECTED_MENU = 'SELECTED_MENU';
const RESET_ALL_STATE = 'RESET_ALL_STATE';
const LANGUAGE_STORAGE = 'LANGUAGE_STORAGE';
const CHANGE_DARK_MODE = 'CHANGE_DARK_MODE';

export {
  NAVIGATION_ROOT_WITH_SAGA,
  NAVIGATION_ROOT_SUCCESS,
  SELECTED_MENU,
  RESET_ALL_STATE,
  SHOW_LOADING_WITH_SAGA,
  HIDE_LOADING_WITH_SAGA,
  CHANGE_LANGUAGE,
  LANGUAGE_WITH_SAGA_SUCCESS,
  LANGUAGE_STORAGE,
  CHANGE_DARK_MODE,
};

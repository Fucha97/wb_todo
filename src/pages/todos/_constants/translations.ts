import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { REMAINS_SUB_NAMESPACE } from './page-sub-namespace';

export const TRANSLATIONS = {
  title: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.title`,
  newTodoForm: {
    title: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.newTodoForm.title`,
    description: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.newTodoForm.description`,
    addButtonTitle: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.newTodoForm.addButtonTitle`,
  },
  updateTodoForm: {
    title: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.updateTodoForm.title`,
    description: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.updateTodoForm.description`,
    closeButtonTitle: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.updateTodoForm.closeButtonTitle`,
    saveButtonTitle: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.updateTodoForm.saveButtonTitle`,
  },
  todoItem: {
    updateButtonTitle: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.todoItem.updateButtonTitle`,
    deleteButtonTitle: `${APP_NAMESPACE}:${REMAINS_SUB_NAMESPACE}.todoItem.deleteButtonTitle`,
  },
};

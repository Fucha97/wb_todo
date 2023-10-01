import React from 'react';
import { IAction, RouteNode } from '@wildberries/service-router';
import { ReduxStoreLoader } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { AppLayout } from '@/_layouts/app-layout';
import { Page } from './page';
import { storeInjectConfig } from './store-inject-config';
import { TRANSLATIONS } from './_constants/translations';

const pageNode = 'todo';

const action: IAction = async ({ fromState, toState }) => {
  return {
    title: i18next.t(TRANSLATIONS.title),
    content: (
      <ReduxStoreLoader
        fromState={fromState}
        storeInjectConfig={storeInjectConfig}
        toState={toState}
      >
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <Page />;
              }

              return content;
            }}
          </RouteNode>
        </AppLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;

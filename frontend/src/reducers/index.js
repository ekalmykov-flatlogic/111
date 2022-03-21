import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import articles from 'reducers/articles/articlesReducers';

import tags from 'reducers/tags/tagsReducers';

import categories from 'reducers/categories/categoriesReducers';

import comments from 'reducers/comments/commentsReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,

    users,

    articles,

    tags,

    categories,

    comments,
  });

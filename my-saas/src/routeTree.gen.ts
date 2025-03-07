/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OnboardingImport } from './routes/_onboarding'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as OnboardingGettingStartedImport } from './routes/_onboarding/getting-started'
import { Route as AppWorkspaceIndexImport } from './routes/_app/$workspace/index'

// Create/Update Routes

const OnboardingRoute = OnboardingImport.update({
  id: '/_onboarding',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OnboardingGettingStartedRoute = OnboardingGettingStartedImport.update({
  id: '/getting-started',
  path: '/getting-started',
  getParentRoute: () => OnboardingRoute,
} as any)

const AppWorkspaceIndexRoute = AppWorkspaceIndexImport.update({
  id: '/$workspace/',
  path: '/$workspace/',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_onboarding': {
      id: '/_onboarding'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof OnboardingImport
      parentRoute: typeof rootRoute
    }
    '/_onboarding/getting-started': {
      id: '/_onboarding/getting-started'
      path: '/getting-started'
      fullPath: '/getting-started'
      preLoaderRoute: typeof OnboardingGettingStartedImport
      parentRoute: typeof OnboardingImport
    }
    '/_app/$workspace/': {
      id: '/_app/$workspace/'
      path: '/$workspace'
      fullPath: '/$workspace'
      preLoaderRoute: typeof AppWorkspaceIndexImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppWorkspaceIndexRoute: typeof AppWorkspaceIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppWorkspaceIndexRoute: AppWorkspaceIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface OnboardingRouteChildren {
  OnboardingGettingStartedRoute: typeof OnboardingGettingStartedRoute
}

const OnboardingRouteChildren: OnboardingRouteChildren = {
  OnboardingGettingStartedRoute: OnboardingGettingStartedRoute,
}

const OnboardingRouteWithChildren = OnboardingRoute._addFileChildren(
  OnboardingRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof OnboardingRouteWithChildren
  '/getting-started': typeof OnboardingGettingStartedRoute
  '/$workspace': typeof AppWorkspaceIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof OnboardingRouteWithChildren
  '/getting-started': typeof OnboardingGettingStartedRoute
  '/$workspace': typeof AppWorkspaceIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_app': typeof AppRouteWithChildren
  '/_onboarding': typeof OnboardingRouteWithChildren
  '/_onboarding/getting-started': typeof OnboardingGettingStartedRoute
  '/_app/$workspace/': typeof AppWorkspaceIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/getting-started' | '/$workspace'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/getting-started' | '/$workspace'
  id:
    | '__root__'
    | '/'
    | '/_app'
    | '/_onboarding'
    | '/_onboarding/getting-started'
    | '/_app/$workspace/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRoute: typeof AppRouteWithChildren
  OnboardingRoute: typeof OnboardingRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRoute: AppRouteWithChildren,
  OnboardingRoute: OnboardingRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app",
        "/_onboarding"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/$workspace/"
      ]
    },
    "/_onboarding": {
      "filePath": "_onboarding.tsx",
      "children": [
        "/_onboarding/getting-started"
      ]
    },
    "/_onboarding/getting-started": {
      "filePath": "_onboarding/getting-started.tsx",
      "parent": "/_onboarding"
    },
    "/_app/$workspace/": {
      "filePath": "_app/$workspace/index.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */

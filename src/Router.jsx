import React from 'react'
import {createBrowserRouter,} from "react-router-dom";
import UseStateEg from './Teaching/UseStateEg';
import UseEffectEg from './Teaching/UseEffectEg';
import UseEffectSearch from './Practising/UseEffectSearch';
import UseLayoutEffect from './Teaching/UseLayoutEffect';
import UseIdEg from './Teaching/UseIdEg';
import UseRefEg from './Teaching/UseRefEg';

export const Router = createBrowserRouter([
  {
    path: "/UseStateEg",
    element: <UseStateEg />
  },
  {
    path: "/UseEffectEg",
    element: <UseEffectEg />
  },
  {
    path: "/UseEffectSearch",
    element: <UseEffectSearch />
  },
  {
    path: "/UseLayoutEffect",
    element: <UseLayoutEffect />
  },
  {
    path: "/UseId",
    element: <UseIdEg />
  },
  {
    path: "/UseRefEg",
    element: <UseRefEg />
  }
]);



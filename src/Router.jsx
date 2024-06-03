import React from 'react'
import {createBrowserRouter,} from "react-router-dom";
import UseStateEg from './Teaching/UseStateEg';
import UseEffectEg from './Teaching/UseEffectEg';
import UseEffectSearch from './Practising/UseEffectSearch';
import UseLayoutEffect from './Teaching/UseLayoutEffect';
import UseIdEg from './Teaching/UseIdEg';
import UseRefEg from './Teaching/UseRefEg';
import Parent from './Teaching/UseContextEg/Parent';
import MainInterface from './MainInterface/MainInterface';
import UseCallBackHook from './Teaching/UseCallBackEg';
import UseMemoHook from './Teaching/UseMemo';
import UseActionStateEg from './Teaching/UseActionStateEg/UseActionStateEg';
import PlayerCard from './Practising/PlayerCard/PlayerCard';
import CallBack from './Practising/CallBack';
import Memo from './Practising/Memo';
import ReducerEg from './Teaching/UseReducerEg';
import ItemList from './Practising/ItemList';

export const Router = createBrowserRouter([
  {
    path:'/',
    element:<MainInterface/>
  },
  {
    path: "/UseState",
    element: <UseStateEg />
  },
  {
    path: "/UseEffect",
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
    path: "/UseRef",
    element: <UseRefEg />
  },
  {
    path:'/UseContext',
    element: <Parent />
  },
  {
    path:'/UseCallBack',
    element:<UseCallBackHook/>
  },
  {
    path:'/UseMemo',
    element: <UseMemoHook/>
  },
  {
    path: '/UseActionState',
    element: <UseActionStateEg/>
  },
  {
    path: '/FillForm',
    element: <PlayerCard/>
  },
  {
    path:'/CallBack',
    element:<CallBack/>
  },
  {
    path: '/Memo',
    element: <Memo/>
  },
  {
    path: '/UseReducer',
    element: <ReducerEg/>
  },
  {
    path:'/ItemList',
    element:<ItemList/>
  }
]);



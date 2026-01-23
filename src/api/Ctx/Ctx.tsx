import React from "react";
import type { BasicPage, BasicPageType } from "./Ctx.types";

interface ContextProps {
    pages: BasicPage<BasicPageType>[],
    content:any
    setCurrentPage: (value:string)=> void
    isLoading: boolean
}

const initialProp:ContextProps = {
    pages:[],
    currentPage: 'sex_and_salvation',
} as unknown as ContextProps

export const Ctx = React.createContext<ContextProps>(initialProp);
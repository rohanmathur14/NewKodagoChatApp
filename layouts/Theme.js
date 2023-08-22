import { useSession } from "next-auth/react"
import { useState,useEffect } from 'react';
import Router from "next/router";
export default function Theme({ children }) {
    
    return (
            <>
            { children}
            </>
    );
}

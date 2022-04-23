import React, { useState, useEffect } from "react";
import axios from "axios";


export const getUser = async() => {
    
    
    
    const userObject= await axios({
            method: 'GET',
            withCredentials: true,
            url: 'http://localhost:3000/getUser'
        }
        )

        return userObject     


    }
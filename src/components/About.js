import React from "react";
import profile from '../images/profile.jpg'

export default function About() {
    return (
        <React.Fragment>
            <img className="d-inline-block col-6 m-3" src={profile} alt="Profile"/>
            <span className="d-inline-block col-6 m-3 fw-500">
                Hi! My Name is Charles Morton. I am from Charlotte, North Carolina. I am
                currently 22 years old. I graduated from Ardrey Kell High School in 2020.
                I am looking to begin my career in the Web Development field. I have finished 
                the fullstack web development program through Georgia Tech University. I truly 
                love writing code and watching my ideas come to fruition. The opportunity to 
                have fun and interesting problem solving tasks is something that I find to be 
                extremely rewarding. I hope through this display of my projects to show some of 
                the skills and mastery I've developed up to this point.
            </span>
        </React.Fragment>
    )
}
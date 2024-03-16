import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Test() {
    useEffect(()=>{
        console.log("usee effect sample");
    },[])
    return <>
    {console.log("kuch v likh do")}
        <Link to={"/t2"}>test2</Link>
        <Link to={"/t3"}>test3</Link>
        <div>hello Doston</div>
    </>
}

export function Test2() {

    useEffect(() => {
        console.log("test 2 load hua");

        return () => {

            console.log("test2 haat gaya or code mera faat gaya");
        }
    }, []);
    return <>
        <Link to={"/"}>test</Link>
        <Link to={"/t3"}>test3</Link>
        <div>hello Doston11111</div>
    </>
}

export function Test3() {
    useEffect(() => {
        console.log("test 2 load hua");

        return () => {
            console.log("test2 haat gaya or code mera faat gaya");
        }
    }, []);
    return (
        <>
            <Link to={"/"}>test</Link>
            <Link to={"/t2"}>test2</Link>
            <div>Test3</div>
        </>
    )
}

export default Test
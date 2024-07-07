import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from 'react'
import Container from "./components/container/Container";

function AppLayout() {
  return (
    <>
    <Container>
    <Header />
    <Outlet />
    <Footer/>
    </Container>
    </>
  )
}

export default AppLayout
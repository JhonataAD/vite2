import React from "react"; 

import {Navigate, Route, Routes} from "react-router-dom"

import Home from '../pages/home/';
import ListarPortfolio from '../pages/portfolio/ListaPortfolio';
import CadastrarExperiencia from '../pages/curriculo/CadastrarExperiencia/';
import CadastrarPorfolio from '../pages/portfolio/ManipularProjeto';
import CadastrarInformacoes from '../pages/curriculo/CadastrarInformacoes';
import ListaExperiencia from '../pages/curriculo/ListaExperiencia';



 
 

import Layout from "../components/layout/Layout";

import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => { 
    const {authenticated, isLoading } = useAuth();

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (!authenticated) { 
        return <Navigate to ="/login" />;

    }

    return(
    <Layout>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/curriculo/Informacoes/cadastro" element={<CadastrarInformacoes />} />
        <Route path="/curriculo/cadastrar/experiencia" element={<CadastrarExperiencia />} />
        <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />
        <Route path="/cadastro/listagem" element={<CadastrarPorfolio />} />
        <Route path="/portfolio/listagem" element={<ListarPortfolio />} />
        </Routes> 
 </Layout> 
);

};

export default AppRoutes;
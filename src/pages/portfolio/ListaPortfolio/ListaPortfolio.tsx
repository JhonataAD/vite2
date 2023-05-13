import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Table,
    Column
    } from "../../../components/common/Table";

    import{
        Projeto,
        deleteProjeto,
        getPortfolio
    } from "../../../services/portfolioService"

const ListarPortfolio: React.FC = () => {
        const navigate = useNavigate();
        const [portfolio, setPortfolio] = useState<Projeto[]>([]);

        const fetchPortfolio = async () => {
            try {
                const portfolio = await  getPortfolio();
                setPortfolio(portfolio);
            } catch (error) {
                console.log(error);
                alert("Error ao buscar portfólio!");
            }
        };



        useEffect ( () => {
            fetchPortfolio();
        }, []);



    const handleEdit =(itemPortfolio: Projeto) => {
        //lógica para lidar com a edição do item índece "index"
        navigate("/cadastro/listagem",{ state: itemPortfolio });
    };

    const handleDelete = async (portfolio: Projeto) => {
            //lógica para lidar com a remoção do item índece "index"
             try {
                await deleteProjeto(portfolio.id);
                fetchPortfolio();
                alert("Portfólio excluído com sucesso!");
             } catch (error) {
                console.log(error);
                alert("Erro ao excluir o portfólio!")
             }
        };

        const columns: Column<Projeto>[] = [
            { header: "Titulo", accessor: "title" },
            { header: "Imagem", accessor: "image" },
            { header: "Link", accessor: "link" },
        ];

        return(
           <Table
            columns={columns}
            data={portfolio}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    

   );
};

export default ListarPortfolio;

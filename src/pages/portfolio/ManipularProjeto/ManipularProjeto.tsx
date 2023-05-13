import React from "react";

import * as Yup from "yup";

import { useLocation, useNavigate } from "react-router-dom";

import Form from "../../../components/forms/Form";
import Input from "../../../components/forms/Input/Brasil";
import Button from "../../../components/common/Button";
import Title from "../../../components/common/Title/Title";



import { Projeto, createOrUpdateProjeto } from "../../../services/portfolioService";

const ManipularProjeto = () => {
    const navigate = useNavigate();
    const portfolio = useLocation().state as Projeto;

    const initialValues: Projeto = {
        link: "",
        image: "",
        title: "",

    };

    const validationSchema = Yup.object().shape({
        link: Yup.string().required("Campo Obrigatorio"),
        image: Yup.string().required("Campo Obrigatorio"),
        title: Yup.string().required("Campo Obrigatorio"),
    });

    const onSubmit = async (values: Projeto, { resetForm }: { resetForm: () => void }) => {
        try {
            await createOrUpdateProjeto(values);
            resetForm();
            navigate("/portfolio/listagem");
            alert("Formulário enviado com sucesso!");
        } catch (error) {
            alert("Error ao enviar o formulário!");
        }

    };


    return (
        <Form

            initialValues={portfolio || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {({ errors, touched }) => (

                <>

                    {
                        !portfolio ?
                            <Title>Cadastrar Projeto</Title>
                            :
                            <Title>Atualizar Projeto</Title>
                    }

                    <Input
                        label="Link"
                        name="link"
                        errors={errors.link}
                        touched={touched.link}
                    />

                    <Input
                        label="Image"
                        name="image"
                        errors={errors.image}
                    />

                    <Input
                        label="Título"
                        name="title"
                        errors={errors.title}
                        touched={touched.title}
                    />

                    <Button type="submit">Salvar</Button>
                </>

            )}

        </Form>
    );
};

export default ManipularProjeto;


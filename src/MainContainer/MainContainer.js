import React from 'react';
import { useState } from 'react';
import DailyClass from './DailyClass/DailyClass';
import ListContainer from './ListContainer/ListContainer';
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import Button from "./button1/button";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditarPerfil from "./button1/EditarPerfil";


import "./MainContainer.css";

import { currentSchedule, trainerById1, listHomework, studentsByTraining } from '../sampleData';


export default function MainContainer() {
    const [dailyScheduleData] = useState(currentSchedule);
    const [isTrainer] = useState(false);
    const [trainer] = useState(trainerById1);
    const [homeworks] = useState(listHomework);
    const [students] = useState(studentsByTraining);
    const [showEditProfile, setshowEditProfile] = useState(false);
    function handleEditProfile() {
        setshowEditProfile(!showEditProfile);
    }


    return (
        <div className="MainContainer">
            <Card />
            <div className="DailyClass">
                <DailyClass
                    isTrainer={isTrainer}
                    dailyScheduleData={dailyScheduleData}
                    trainer={trainer} /> </div>
            <div className="ListContainer">
                <ListContainer
                    isTrainer={isTrainer}
                    homeworks={homeworks}
                    students={students} /></div>
            <div className="ContainerButtons">
                <Button children="Editar Perfil" onClick={handleEditProfile}></Button>
                <Button children="Ver Agenda"></Button>
                <Button children="Ver Feedback"></Button>
            </div>
            <ModalContainer
                children={<EditarPerfil />}
                show={showEditProfile}
                handlePrimary={() => alert("clicked editar perfil")}
                handleClose={handleEditProfile}
                primaryBtnName={"Guardar"}
                secondaryBtnName={"Cerrar"}
            />
            <div className="DailyClassSurvey"><DailyClassSurvey /></div>
        </div>
    );
}



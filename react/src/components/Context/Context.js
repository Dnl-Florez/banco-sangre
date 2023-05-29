import React from 'react';

const BancoContext = React.createContext();

function BancoProvider(props){
  const [openModal, setOpenModal] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openBuscarDon, setOpenBuscarDon] = React.useState(false);
  const [openBuscarPac, setOpenBuscarPac] = React.useState(false);
  const [openCrearDon, setOpenCrearDon] = React.useState(false);
  const [openCrearPac, setOpenCrearPac] = React.useState(false);
  const [openMostarPac, setOpenMostrarPac] = React.useState(false);
  const [openMostrarDon, setOpenMostrarDon] = React.useState(false);
  const [openEditarPac, setOpenEditarPac] = React.useState(false);
  const [openEditarDon, setOpenEditarDon] = React.useState(false);
 
  return (
    <BancoContext.Provider value={{
      	openModal,
	      setOpenModal,
      	openLogin,
      	setOpenLogin,
        openBuscarDon,
        setOpenBuscarDon,
        openBuscarPac,
        setOpenBuscarPac,
        openCrearDon,
        setOpenCrearDon,
        openCrearPac,
        setOpenCrearPac,
        openMostarPac,
        setOpenMostrarPac,
        openMostrarDon,
        setOpenMostrarDon,
        openEditarPac,
        setOpenEditarPac,
        openEditarDon, 
        setOpenEditarDon
    }}>
      {props.children}
    </BancoContext.Provider>
  );
}

export { BancoContext, BancoProvider };

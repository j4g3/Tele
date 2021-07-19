import React from 'react';

import {  BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/admin/dashboard';

import Home from './pages/client/home';
import Usuarios from './pages/admin/usuarios';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';

export default function Routes(){
    return(
        <BrowserRouter>
        <switch>
            <Route path="/" exact component= {Home} />

            <Route path="/admin" exact component= {Dashboard} />

            <Route path="/admin/usuarios" exact component= {Usuarios} />
            <Route path="/admin/usuarios/cadastrar" exact component= {UsuarioCadastrar} />
            <Route path="/admin/usuarios/editar" exact component= {UsuarioEditar} />

        


        </switch>
        </BrowserRouter>
    )
}
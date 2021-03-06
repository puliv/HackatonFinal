import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class MenuTaller extends Component {
    // constructor() {
    //     super();
    // }

    // componentDidMount() {
    //     // Auto initialize all the things!
    //     M.AutoInit();
    // }

    handleClick = () => {
        console.log("hola")
    }

    render() {
        return (
            <div>
                <SideNav trigger={
                    <Button className="btnNav btn-flat">
                        <a href=" " className="cyan-accent-2 z-depth 3">
                            <i className="material-icons">menu</i>
                        </a>
                    </Button>} options={{ closeOnClick: true }}  >
                    {/* <SideNavItem userView user={{
                        background: 'https://placeimg.com/640/480/tech',
                        image: 'static/media/react-materialize-logo.824c6ea3.svg',
                        name: 'Nombre',
                        Bicicleta: 'Modelo Bicicleta'
                    }}
                    /> */}
                    <SideNavItem href="#!icon" icon="directions_bike">
                        BiciHelper
                            </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem waves href="#!second" icon="library_books">
                        Historial
                        </SideNavItem>
                    <SideNavItem waves href="#!third" icon="favorite_border">
                        Recomendaciones
                        </SideNavItem>
                    <SideNavItem waves href="#!fourth" icon="map">
                        Mapa
                        </SideNavItem>
                    <SideNavItem waves href="#!fourth" icon="exit_to_app">
                        Cerrar Sesión
                        </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader icon="help_outline">
                        Ayuda
                            </SideNavItem>
                </SideNav>
            </div>

        )
    }
}


export default MenuTaller

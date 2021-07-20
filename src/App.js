import { Component } from "react";
import './App.css';
import ParkService from "./service/ParkService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { Button } from  'primereact/button';

import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.items = [
      {
        label: 'Agregar',
        icon: 'pi pi-fw pi-plus',
        command: () => { this.showSaveDialog() }
      }
    ];
    this.parkService = new ParkService();
    this.save = this.save.bind(this);
    this.footer = (
      <div>
        <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
      </div>
    );
    
  }

  componentDidMount() {
    this.parkService.getAll().then(data => this.setState({ parks: data }))
    this.setState({
      visible: false,
      park: {
        name: null,
        description: null,
        openingDate: null,
        province: null,
        canton: null,
        district: null,
        address: null
      }
    });
  }

  save() {
    this.parkService.save(this.state.park).then(data => {
      this.setState({
        visible : false,
        park: {
          name: null,
          description: null,
          openingDate: null,
          province: null,
          canton: null,
          district: null,
          address: null
        }
      });
    })
    this.parkService.getAll().then(data => this.setState({ parks: data }))
  }

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
        <Menubar model={this.items} />
        <br></br>
        <Panel header="React: Lista de parques">

          <DataTable value={this.state.parks} style={{ marginTop: '20px' }}>
            <Column field="name" header="Nombre del parque"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="openingDate" header="Fecha de inauguración"></Column>
            <Column field="province" header="Provincia"></Column>
            <Column field="canton" header="Cantón"></Column>
            <Column field="district" header="Distrito"></Column>
            <Column field="address" header="Dirección"></Column>
          </DataTable>
        </Panel>

        <Dialog header="Añadir parque" visible={this.state.visible} style={{ width: '20%' }} footer={this.footer} modal={true} onHide={() => this.setState({ visible: false })}>
          <span className="p-float-label">
            <InputText id="name" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.name = e.target.value

              return { park };
            })}
            } />
            <label htmlFor="name">Nombre</label>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="description" style={{ width: '100%' }}value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.description = e.target.value

              return { park };
            })}
            } />
            <label htmlFor="description">Descripción</label>
            <br></br>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="openingDate" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.openingDate = e.target.value

              return { park };
            })}
           } />
            <label htmlFor="openingDate">Fecha de inauguración</label>
            <br></br>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="province" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.province = e.target.value

              return { park };
            })}
            } />
            <label htmlFor="province">Provincia</label>
            <br></br>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="canton" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.canton = e.target.value

              return { park };
            })}
           } />
            <label htmlFor="canton">Cantón</label>
            <br></br>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="district" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.district = e.target.value

              return { park };
            })}
           } />
            <label htmlFor="district">Distrito</label>
            <br></br>
          </span>

          <span className="p-float-label">
            <br></br>
            <InputText id="address" style={{ width: '100%' }} value={this.state.value} onChange={(e) => {
              this.setState(prevState => {
              let park = Object.assign({}, prevState.park)
              park.address = e.target.value

              return { park };
            })}
            } />
            <label htmlFor="address">Dirección</label>
            <br></br>
          </span>
        </Dialog>
      </div>
    );
  }

  showSaveDialog() {
    this.setState({
      visible: true,
      park: {
        name: null,
        description: null,
        openingDate: null,
        province: null,
        canton: null,
        district: null,
        address: null
      }
    })
  }
}
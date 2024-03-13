import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import './PopupDiagnostic.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function PopupDiagnostic(props) {
    const [open, setOpen] = React.useState(false);
    const [loader, setLoader] = React.useState(false)
    const handleClose = () => setOpen(false);
    const handleOpen = (e) => setOpen(true)
    const {diagnostic} = props.openText.props
    const {cita} = props.openText.props
    let createdTime = new Date(diagnostic.createdTime)


    const handleDownload = () => {
        setLoader(true)
        const receipt = document.querySelector(".popup-diagnostic-container");
        html2canvas(receipt).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('Diagnostico.pdf');
            setLoader(false)
        })
    }
return (
    <div>
        <TriggerButton type="button" onClick={handleOpen}>
            {props.openText}
        </TriggerButton>
        <Modal
            open={open}
            onClose={handleClose}
            slots={{ backdrop: StyledBackdrop }}>
            <ModalContent sx={{ width: 800, height: 700 }}>
                <div className='popup-diagnostic-container'>
                    <div className='popup-diagnostic-header'>
                        <p className='logo'>CENTRO MEDICO <span>DIVINA MISERICORDIA</span></p>
                        <p className='title'>INFORME MEDICO</p>
                    </div>
                    <p className='popup-diagnostic-address'>AV. CORDILLERA ESQ EL SAMAN SN, Santo Domingo Oeste Santo Domingo Oeste, Republica Dominicana 10701</p>
                    <p className='popup-diagnostic-date'>{new Date().toLocaleString()}</p>
                    <div>
                    {/*PATIENT DATA*/}
                        <div>
                            <p className='diagnostic-title'>Datos del paciente</p>
                            <div className='popup-diagnostic-info'>
                                <div className='popup-diagnostic-first-row'>
                                    <p className='row-item'><span>Nombre: </span>{cita.map(cita => cita.name)}</p>
                                    <p className='row-item'><span>Apellido:</span> {cita.map(cita => cita.lastname)}</p>
                                    <p className='row-item'><span>Direccion:</span>{cita.map(cita => cita.address)}</p>
                                    <p className='row-item'><span>Telefono:</span> {cita.map(cita => cita.phone)}</p>
                                </div>
                                <div className='popup-diagnostic-second-row'>
                                    <p className='row-item'><span>Sexo: </span>{cita.map(cita => cita.sex)}</p>
                                    <p className='row-item'><span>{cita.map(cita => cita.documenttype)}:</span>{cita.map(cita => cita.document)}</p>
                                    <p className='row-item'><span>Seguro:</span> {cita.map(cita => cita.assurance)}</p>
                                    <p className='row-item'><span>Correo electronico:</span> {cita.map(cita => cita.email)}</p>
                                </div>
                            </div> 
                        </div> 
                        {/*APPOINTMENT DATA*/}
                        <div>
                            <p className='diagnostic-title'>Informacion de la cita</p>
                            <div className='popup-diagnostic-info'>
                                <div className='popup-diagnostic-first-row'>
                                    <p className='row-item'><span>Codigo de confirmacion: </span>{cita.map(cita => cita.id.substring(0,5))}</p>
                                    <p className='row-item'><span>Doctor: </span>{cita.map(cita => cita.doctor)}</p>
                                    <p className='row-item'><span>Servicio:</span> {cita.map(cita => cita.service)}</p>
                                </div>
                                <div className='popup-diagnostic-second-row'>
                                    <p className='row-item'><span>Fecha (Mes, dia, año):</span>{cita.map(cita => cita.dia.substring(4))}</p>
                                    <p className='row-item'><span>Horario:</span> {cita.map(cita => cita.date)}</p>
                                    <p className='row-item'><span>Fecha de creacion: </span>{cita.map(cita => new Date(cita.createdTime).toLocaleString())}</p>
                                </div>
                            </div> 
                        </div>
                        {/*DIAGNOSTIC DATA*/}
                        <div>
                            <p className='diagnostic-title'>Resultados</p>
                            <div className='popup-diagnostic-info'>
                                <div className='popup-diagnostic-first-row'>
                                    <p className='results-item'><span>Resumen: </span>{diagnostic.resume}</p>
                                    <p className='results-item'><span>Medicina:</span> {diagnostic.medicine}</p>
                                    <p className='popup-diagnostic-date'>Publicado: {createdTime.toLocaleString()}</p>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
                <div className='popup-button'>
                    <button onClick={handleDownload}>{loader ? (
                        <span>Descargando</span>): (
                        <span>Descargar</span>
                        )}
                    </button>
                </div>
            </ModalContent>
        </Modal>
    </div>
);
}

const Backdrop = React.forwardRef((props, ref) => {
const { open, className, ...other } = props;
    return (
        <div
        className={clsx({ 'base-Backdrop-open': open }, className)}
        ref={ref}
        {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px
`;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({ theme }) => css`
    position: relative;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 4px;
    overflow-y: scroll;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
    ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 0;
`,
);

const TriggerButton = styled('button')(
    ({ theme }) => css`
    cursor: pointer;
`,
);
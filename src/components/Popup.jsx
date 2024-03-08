import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import './Popup.css'
export default function Popup(props) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (e) => setOpen(true)
    const {state} = props.openText.props

    
return (
    <div>
        <TriggerButton type="button" onClick={handleOpen}>
            {props.openText}
        </TriggerButton>
        <Modal
            open={open}
            onClose={handleClose}
            slots={{ backdrop: StyledBackdrop }}>
            <ModalContent sx={{ width: 600 }}>
                <h2 className="popup-title">
                    {props.title}
                </h2>
                <p className='popup-id'>{state.id.substring(0,5)}</p>
                <p className="popup-name">
                    {props.name}
                </p>
                <p className='popup-ruc'>RUC .</p>
                <p className='popup-address'>{props.address}</p>
                <p className='popup-phone'>Teléfono: 809-564-7130</p>
                <p className='popup-website'>www.centromedicodivinamisericordia.com.do</p>
                <div className='grid-details-container'>
                    <p className='grid-details-item'>Paciente</p>
                    <p className='grid-details-item'>:{state.name + " " + state.lastname}</p>
                    <p className='grid-details-item'>Documento</p>
                    <p className='grid-details-item'>:{state.documenttype + " " + state.document}</p>
                    <p className='grid-details-item'>Dirección</p>
                    <p className='grid-details-item'>:{state.address}</p>
                    <p className='grid-details-item'>Correo</p>
                    <p className='grid-details-item'>:{state.email}</p>
                    <p className='grid-details-item'>Teléfono</p>
                    <p className='grid-details-item'>:{state.phone}</p>
                    <p className='grid-details-item'>Sexo</p>
                    <p className='grid-details-item'>:{state.sex}</p>
                    <p className='grid-details-item'>Aseguradora</p>
                    <p className='grid-details-item'>:{state.assurance}</p>
                </div>
                <div className='grid-details-container'>
                    <p className='grid-details-item'>Servicio</p>
                    <p className='grid-details-item'>:{state.service}</p>
                    <p className='grid-details-item'>Doctor</p>
                    <p className='grid-details-item'>:{state.doctor}</p>
                    <p className='grid-details-item'>Fecha</p>
                    <p className='grid-details-item'>:{(state.dia).substring(4)}</p>
                    <p className='grid-details-item'>Horario</p>
                    <p className='grid-details-item'>:{state.date}</p>
                    <p className='grid-details-item'>Aseguradora</p>
                    <p className='grid-details-item'>:{state.assurance}</p>
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
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
    ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
`,
);

const TriggerButton = styled('button')(
    ({ theme }) => css`
    cursor: pointer;
`,
);
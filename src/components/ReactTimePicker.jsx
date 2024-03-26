import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

export default function ReactTimePicker(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'TimePicker',
                    'MobileTimePicker',
                    'DesktopTimePicker',
                    'StaticTimePicker',
                ]}
            >
                <DemoItem label="Selecciona hora">
                    <StaticTimePicker defaultValue={dayjs(`2022-04-17T${props.hora}`)} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

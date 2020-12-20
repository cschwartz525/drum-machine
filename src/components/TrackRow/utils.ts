import { StylesConfig } from 'react-select';
import samples from '../../samples';

type SampleOption = {
    label: string;
    value: string;
};

type SampleOptionGroup = {
    label: string;
    options: Array<SampleOption>;
};

export const getSampleOptions = (): Array<SampleOptionGroup> => {
    const {
        claps,
        highhats,
        kicks,
        snares
    } = samples;

    return [
        {
            label: 'Kicks',
            options: kicks.map(sample => ({
                label: sample.label, value: sample.key
            }))
        },
        {
            label: 'Snares',
            options: snares.map(sample => ({
                label: sample.label, value: sample.key
            }))
        },
        {
            label: 'Claps',
            options: claps.map(sample => ({
                label: sample.label, value: sample.key
            }))
        },
        {
            label: 'High Hats',
            options: highhats.map(sample => ({
                label: sample.label, value: sample.key
            }))
        }
    ];
};

export const getSelectStyles = (): StylesConfig => ({
    container: (provided) => ({
        ...provided,
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'sans-serif',
        margin: '5px 10px 5px 0'
    }),
    control: (provided) => ({
        ...provided,
        minHeight: '30px',
        width: 200
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#bb0000' : 'none',
        color: state.isSelected ? '#ffffff' : '#333333',
        cursor: 'pointer',
        fontFamily: 'sans-serif',

        '&:hover': {
            background: state.isSelected ? 'linear-gradient(#bb0000, #880000)' : 'linear-gradient(#888888, #555555)',
            color: '#ffffff'
        }
    })
})
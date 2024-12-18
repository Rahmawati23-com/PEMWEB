/**
 * membuat array of object yang  berisi data karyawan
 */
const employees = [
    {
        id : 111,
        name : 'Rahmawati Ibrahim',
        position : 'Manager',
        isMarried : true,
        religion : 'Islam'
    },
    {
        id : 112,
        name : 'Mayyuni Ikla Azahra',
        position : 'Assistant Manager',
        isMarried : false,
        religion : 'Islam'
    },
    {
        id : 113,
        name : 'Hamida Aulia Hakim',
        position : 'Supervisor',
        isMarried : true,
        religion : 'Islam'
    },
    {
        id : 114,
        name : 'Neng Fauziyah Hasanah',
        position : 'Staff',
        isMarried : false,
        religion : 'Islam'
    },
    {
        id : 115,
        name : 'Ismail Ibrahim',
        position : 'Staff',
        isMarried : false,
        religion : 'Islam'
    }
];

const columnNames = [
    'No',
    'NIP',
    'Nama',
    'Jabatan',
    'Status',
    'Agama',
    'Gaji Pokok',
    'Tunjangan Jabatan',
    'BPJS',
    'Tunjangan Keluarga',
    'Zakat',
    'Gaji Bersih'
]

export {employees, columnNames};

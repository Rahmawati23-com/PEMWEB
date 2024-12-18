function formatRupiah(number = 0) {
    let nominal = parseInt(number);
    return new Intl.NumberFormat('id-ID', {style: 'currency', currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits:0 }).format(nominal);
}

function calculateTotalSalary(employees = {}) {
    const { position, isMarried, Religion } = employees

    const listGajiPokok = {
        Manager: 15_000_000,
        'Assistant Manager': 10_000_000,
        Supervisor: 7_500_000,
        Staff: 3_000_000
    };

    const gajiPokok = listGajiPokok[position]; 
    const Tunjanganjabatan = 0.2 * gajiPokok;
    const bpjs = 0.05 * gajiPokok;
    const tunjanganKeluarga = isMarried ? 0.1 * gajiPokok : 0 ;
    const gajikotor = gajiPokok + Tunjanganjabatan + bpjs + tunjanganKeluarga; 
    const Zakat = Religion === 'islam' && gajikotor >= 7_000_000 ? 0.025 * gajikotor : 0 ;
    const gajibersih = gajikotor - Zakat;

    Object.assign(employees, {
        gajiPokok,
        Tunjanganjabatan,
        bpjs,
        tunjanganKeluarga,
        gajikotor,
        Zakat, 
        gajibersih
    }) 
};

export {formatRupiah, calculateTotalSalary};